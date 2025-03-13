// chat completion and layout generator using Gemini API
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { prompt } from "@/utils/prompt";
import { removeLastAndFirstLine } from "./helper";
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.AIML_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const chatwithAI = async (filePath: string) => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        const completion = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: prompt }], // Corrected: wrap prompt in an object
                },
                {
                    role: "model",
                    parts: [{ text: "[Markdown content]:\n\n" + content }], // Corrected: wrap content in an object
                },
            ],
        });

        // streamline the ai response as vercel only 10s of api calling time 
        const resultStream = await completion.sendMessageStream("[Markdown content]:\n\n" + content)
        console.log(resultStream + "stream response ");
        
        // const result = await completion.sendMessage("[Markdown content]:\n\n" + content);
        let fullResponse = ""

        for await (const chunk of resultStream.stream) {
            console.log(chunk.text() + "text wala ");
            
            fullResponse += chunk.text()
        }
        // const responsefromAI = result.response.text();
        // console.log(responsefromAI);



        const actualRespone = removeLastAndFirstLine(fullResponse);

        const demoDir = path.join("/tmp", "demo");
        // const demoDir = path.join(process.cwd() ,"/tmp", "demo");

        if (!fs.existsSync(demoDir)) {
            fs.mkdirSync(demoDir, { recursive: true });
        }

        const outpath = path.join(demoDir, "page.tsx");
        console.log("herer response ");
        
        

        fs.writeFileSync(outpath, actualRespone!, "utf-8");

        return path.relative(process.cwd(), outpath);
    } catch (error) {
        console.error("Error while calling the AI:", error);
        if (error instanceof Error) {
            console.error(error.message);
        }
        return "Error while fetching data from AI";
    }
};

/**
 * taking markdown data or json data send it to gemini gets a redesign code of 90s style
 * creates a folder name demo and paste the code in it by visiting that page we can get to see the website
 */