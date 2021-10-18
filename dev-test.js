// npm run dev-test
// Import
const Block = require("./block");

const block = new Block("time","hash1","hash2","irgendwas");


// console.log(block.toString());


console.log(Block.genesis("test").toString());


const testBlock = Block.mineBlock(Block.genesis(["StartDaten"]),["MeineDaten"]);

console.log(testBlock.toString());