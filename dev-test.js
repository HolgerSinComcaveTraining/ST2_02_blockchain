// call: npm run dev-test

// Import
const Block = require("./block");

// const block = new Block("aktuelle zeit","hash1","hash2","meine Daten");
// console.log(block.toString());


//console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
console.log(testBlock.toString());