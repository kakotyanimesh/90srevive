// for generating page with ai written codes 

import path from "path"
import fs from "fs"

export const pageGenerator = (demofolder : string, aiContent : string) => {
    const pathSrc = path.join(demofolder, 'page.tsx')

    fs.writeFileSync(pathSrc, aiContent, "utf-8")

    return pathSrc
}