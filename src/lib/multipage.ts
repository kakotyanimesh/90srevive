import path from "path"
import fs from "fs"
import { generateLayout } from "./layouthgen"
import { chatwithAI } from "./gpt"
import { removeLastAndFirstLine } from "./helper"
import { pageGenerator } from "./pageGeneratot"
import { ensureFolderStructure } from "./foldermaker"
export const BuildMultiPage = async (jsonFilePath : string, baseURL : string) => {
    let jsonFile = jsonFilePath
    if(!path.isAbsolute(jsonFilePath)){
        jsonFile = path.join(process.cwd(), jsonFilePath)
    }

    if(!fs.existsSync(jsonFile)){
        throw new Error(`${jsonFilePath} does not exits !! `)
    }

    const rawContent = fs.readFileSync(jsonFile, "utf-8")

    const jsonData = JSON.parse(rawContent)

    // console.log(jsonData.data);
    

    const demoDir = path.join("/tmp" ,"demo")

    if(!fs.existsSync(demoDir)){
        fs.mkdirSync(demoDir, {recursive : true})
    }

    const mainPageData = findMainPageData(jsonData.data, baseURL)

    // if(mainPageData.metadata){
    //     console.log("error here");
        
    // }

    const pageTitle = mainPageData.metadata.title || "default title"
    const pageDescription = mainPageData.metadata.description || "default description"

    // layout.tsx generation 
    // await generateLayout(demoDir, pageTitle, pageDescription)

    const rootPageContent = await chatwithAI(mainPageData.markdown)
    const actualRespone = removeLastAndFirstLine(rootPageContent)

    pageGenerator(demoDir, actualRespone)

    // cpde for creating folder files etc => i have to study again

    const folderMap : Record<string, {title : string, description : string, markdown : string[]}> = {}
    
    for (const items of jsonData.data) {
        const url : string =  items.metadata.url

        let folderName = url.replace(baseURL, '')

        folderName = folderName.split('?')[0].replace(/\/$/, "")
        if(!folderName) continue

        const title = items.markdown.title || "Default title"
        const description = items.markdown.description || "Default description"

        const markdown = items.markdown
        // error here ig 
        if (!folderMap[folderName]) {
            folderMap[folderName] = {title, description, markdown : []}
        }
        folderMap[folderName].markdown.push(markdown)


        for (const [folderName, data] of Object.entries(folderMap)) {
            const folderPath = ensureFolderStructure(folderName)
            // await  generateLayout(folderPath, data.title, data.description)
            const combinedMarkdown = data.markdown.join('\n\n')
            const pageContent = await chatwithAI(combinedMarkdown)
            pageGenerator(folderPath, pageContent)
        }
    }

    return { msg: "all pages generated success fully "}

}


const findMainPageData = (data : any[], baseURL : string) : any => {
    for (const items of data) {
        if(items.metadata.url === baseURL){{
            console.log(items);
            return items
        }}
    }   
    return null
}