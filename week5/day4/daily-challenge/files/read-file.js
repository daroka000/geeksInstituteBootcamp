import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readFileContent() {
  const filePath = path.join(__dirname,'file-data.txt');

  try {
    const data = await readFile(filePath, 'utf8');
    console.log('contenu file:');
    console.log(data);
  } catch (err) {
    console.error(' erreur ', err);
  }
}
