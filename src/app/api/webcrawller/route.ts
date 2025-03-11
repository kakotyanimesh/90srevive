// crawwling the websites with the help of firecrawl and take out all designs in json format 
/**
 * make a req to firewall 
 * get data 
 * make a file 
 * save it 
 * going to use bun's fs 
 */

import FirecrawlApp, { ScrapeResponse } from "@mendable/firecrawl-js";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import path from "path";

export async function POST(req: Request) {
    const { url } = await req.json()
    try {
        const crawwlingApp = new FirecrawlApp({apiKey : process.env.FIRECRAWL_API_KEY})

        const scrapeData = await crawwlingApp.scrapeUrl(url, {formats : ['markdown']}) as ScrapeResponse

        if(!scrapeData.success){
            throw new Error("error while scrapping data from url")
        }

        const fileDir = path.join(process.cwd(), "markdownfile")

        const fileName = `markdown_${Date.now()}.md`
        const filePath = path.join(fileDir, fileName)

        if(!fs.existsSync(fileDir)){
            fs.mkdirSync(fileDir, {recursive : true})
        }

        fs.writeFileSync(filePath, scrapeData.markdown!)

        return NextResponse.json({
            msg : "website scrapped successfully",
            filePath
        },{status : 200})

    } catch (error) {
        return NextResponse.json({
            msg : `something went wrong at scrapping data ${error}`
        }, {status : 500})

    }
}