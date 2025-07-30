import { greet } from './greeting.js';
import { Message } from './colorful-message.js';
import { readFileContent } from './files/read-file.js';

async function runChallenge() {
    greet('Developer');              
    Message('Let\'s code!');  
    await readFileContent();          
  }
  runChallenge();