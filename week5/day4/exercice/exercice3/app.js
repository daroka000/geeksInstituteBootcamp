import { writeFile } from './fileManager.js';

const filePath = 'Hello World.txt';
const content1 = 'Hello World !!';
await writeFile(filePath, content1);
await writeFile(filePath, content2);