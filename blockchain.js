// Import
const Block = require("./block");


class Blockchain{
    constructor(){
        this.chain = [Block.genesis("Dies ist der Genesis Block aus der Blockchain")];
    }

    addBlock(data){
        const testBlock = Block.mineBlock(this.chain[this.chain.length-1],data +` --- Dies ist Block Nummer ${this.chain.length}`);
        this.chain.push(testBlock);
        
        // console.log(testBlock.toString());
        // return this.chain;
    }
}

module.exports = Blockchain;