import fs from "fs"
import path from "path"
export const generateLayout = (folderPath : string, title ?:string, description ?:string) => {
    try {
        const layouytTamplatefilePath = `src/lib/layout.txt`

        if(!fs.existsSync(layouytTamplatefilePath)){
            throw new Error("no layout file is present create it first")
        }

        const layoutContent = fs.readFileSync(layouytTamplatefilePath, "utf-8")

        const replacedContent = layoutContent
                                            .replace('{{title}}', title || "default two title")
                                            .replace('{{description}}', description || "default three description")

        

        // const demoDir = path.join(process.cwd(), "src", "app", "demo")

        // if(!fs.existsSync(demoDir)){
        //     fs.mkdirSync(demoDir, {recursive : true})
        // }

        const outputPathofTsx = path.join(folderPath, "layout.tsx")

        fs.writeFileSync(outputPathofTsx, replacedContent, "utf-8")

        return path.relative(process.cwd(), outputPathofTsx)
    } catch (error) {
        console.log(`error while creating file and the layout things `);
        throw new Error(`error while creating file and the layout things `)
        
    }
}

/**
 * a file name layout.txt has basic layouts of a webpage like title description etc (pre written file)
 * we read that file 
 * we alter some content from that file like title and description
 * then write that content to another file and
 * save that file inside the folder path that will be given or src/app/demo folder that is being created here and in the gpt.ts file also 
 */