/**
 * craling => Discovering pages	, follwing links etc 
 * scrapping =>Extracting specific data from a website 
 */

import FirecrawlApp from "@mendable/firecrawl-js"
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// crawling will be done here , for functionality and other things 


export async function POST(req: Request) {
    const { url } = await req.json()

    try {
        const crawlingApp  = new FirecrawlApp({apiKey : process.env.FIRECRAWL_API_KEY})

        const crawlResponse = await crawlingApp.crawlUrl(url, {
            limit : 1,
            scrapeOptions : {
                formats : ['markdown']
            }
        })

        
        if(!crawlResponse.success){
            throw new Error(`Error while crawling the website`)
        }

        console.log(crawlResponse);
        // have to use /tmp => vercel only allows inside tmp file write and with / is absolute path
        // const fileDir = path.join(process.cwd(), '/tmp', "jsonfiles") // for local developement
        const fileDir = path.join("/tmp","jsonfiles")

        if(!fs.existsSync(fileDir)){
            fs.mkdirSync(fileDir, {recursive : true})
        }

        const filePath = path.join(fileDir, 'jsonfile.json')


        fs.writeFileSync(filePath, JSON.stringify(crawlResponse, null, 2), 'utf-8')
        // null => dont want to replace anything , 2 => 2 space and utf => writing coded something 

        return NextResponse.json({
            msg : 'successfully crawled the website and get json file',
            filePath
        },{status : 200})
    } catch (error) {
        return NextResponse.json({
            msg : `something went wrong while crawling the website ${error}`
        })
    }
}