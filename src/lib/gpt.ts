// chat completetion and layout generator 
import OpenAI from "openai";
import fs from "fs"
import { prompt } from "@/utils/prompt";
import { removeLastAndFirstLine } from "./helper";
import path from "path";

const openai = new OpenAI({
    baseURL : 'https://api.aimlapi.com/v1/chat/completions',
    apiKey : process.env.AIML_API_KEY,
    dangerouslyAllowBrowser : true
})

export const chatwithAI = async (filePath : string) => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8')


        const completion = await openai.chat.completions.create({
            model : "gpt-4o",
            messages : [
                {
                    role : "system",
                    content : prompt
                },
                {
                    role : "user",
                    content : "[Markdown content]:\n\n" + content,
                },
            ]
        })

        // console.log("output paht runnun ");


        const responsefromAI = completion.choices[0].message.content
        console.log(responsefromAI);
        
        const actualRespone = removeLastAndFirstLine(responsefromAI)
        

        const demoDir = path.join(process.cwd(), "src", "app", "demo")

        if(!fs.existsSync(demoDir)){
            fs.mkdirSync(demoDir, {recursive : true})
        }


        const outpath = path.join(demoDir, "page.tsx")
        
        fs.writeFileSync(outpath, actualRespone!, "utf-8")
        
        return path.relative(process.cwd(), outpath)
    } catch (error) {
        console.log(`error while calling the ai lol/ `);
        
        return "Error while fetching data from AI"   
    }
}


/**
 * taking makrdown data or json data send it to gpt gets a redsign code of 90s style
 * creates a folder name demo and paste the code in it by visiting that page we can get to see the website 
 */