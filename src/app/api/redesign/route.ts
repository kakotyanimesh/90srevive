// redisgn the code 
/**
 * single page => give markdown content to gpt gets response => create demo folder paste the code also generating a layout.tsx also
 * multipage => give json content and do the same (diffucult)
 */

import { chatwithAI } from "@/lib/gpt"
import { generateLayout } from "@/lib/layouthgen"
import { NextResponse } from "next/server"
import path from "path"
import fs from "fs"
import { BuildMultiPage } from "@/lib/multipage"
import { pageGenerator } from "@/lib/pageGeneratot"

export async function POST(req:Request) {
    try {
        const {filePath, totalPage, baseURL } = await req.json()
        
        if (totalPage === 1) {
            const redesignWebPath = await chatwithAI(filePath)

            // const demoDir = path.join(process.cwd(), "/tmp", "demo") // for local developement
            const demoDir = path.join("/tmp", 'demo')

            if(!fs.existsSync(demoDir)){
                fs.mkdirSync(demoDir, {recursive : true})
            }
            // await generateLayout(demoDir, "my website",  "my website's description")
            
        } else {
            // build whole site 
            const buildResponse = await BuildMultiPage(filePath, baseURL)

        }
        return NextResponse.json({
            msg : "site build success fully check localhost:3000/demo ig "
        })
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            msg : `something went wrong whiile building 90's style website ${error}`
        },{status : 500})
    }
}