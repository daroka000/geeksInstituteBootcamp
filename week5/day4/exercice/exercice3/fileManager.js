import { readFile as fsReadFile, writeFile as fsWriteFile } from 'fs/promises';
// read file  
export async function readFile(filePath) {
  try {
    const data = await fsReadFile(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.error(`Erreur  ${filePath}:`, error.message);
    throw error;
  }}
// write file contenu 
export async function writeFile(filePath, content) {
  try {
    await fsWriteFile(filePath, content, 'utf-8');
    console.log(` File writed succes : ${filePath}`);
  } catch (error) {
    console.error(`Erreur  ${filePath}:`, error.message);
    throw error;
  }
}
