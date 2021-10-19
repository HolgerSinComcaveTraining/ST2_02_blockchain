// git config --global user.email 86824184+HolgerSin@users.noreply.github.com
// npm run dev-test
// Import
const Block = require("./block");
const Blockchain = require("./blockchain");



// let blockArray = [];
// const genesisBlock = Block.genesis("Dies ist der Genesis Block");

// console.log(genesisBlock.toString());

// blockArray.push(genesisBlock);

// for (let index = 0; index < 2; index++) {
//     const testBlock = Block.mineBlock(blockArray[index],["MeineDaten",`Dies ist Block Nummer ${index+1}`]);
//     blockArray.push(testBlock);
//     // console.log(testBlock.toString());
// }

// console.log(blockArray);


let startTime = Date.now();

let myBlockchain = new Blockchain;

// console.log(myBlockchain);

for (let index = 1; index < 5; index++) {
    myBlockchain.addBlock(`Data Set Nr ${index}`);
    
}

console.log(myBlockchain);
let endTime = Date.now();
console.log(endTime - startTime);

