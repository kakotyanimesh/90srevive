
import fs from 'fs';
import path from 'path';

export function ensureFolderStructure(folderName: string): string {
  const demoDir = path.join(process.cwd(), "tmp", 'demo')
  if (!fs.existsSync(demoDir)) fs.mkdirSync(demoDir, { recursive: true })
  const folderPath = path.join(demoDir, folderName)
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true })
  return folderPath;
}

// gpt written code ill write after sometime im tired 