
const SHA256 = require("crypto-js/sha256");

let myNonce;
// Klasse
class Block{

    

    constructor(timestamp, lastHash, hash, data, nonce){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
    }

    toString(){
        return ` Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}
        `
    }

    

    static genesis(ownData){
        // return new this("Genesis time","-----","qakjnfqefjn",["data1", "data2"]);

        const timestamp = Date.now();
        const lastHash  = "-----";
        const hash      = this.leadingZeroHash(timestamp + lastHash + ownData);
        return new this(timestamp, lastHash, hash, ownData, myNonce);
    }

    static mineBlock(lastBlock, ownData){
        const timestamp = Date.now();
        const lastHash  = lastBlock.hash;
        const hash      = this.leadingZeroHash(timestamp + lastHash + ownData);

        return new this(timestamp, lastHash, hash, ownData, myNonce);
    }

    static leadingZeroHash(message){
        let myHash;
        let re = /^0{2}\w*/;
        // let counter = 0;
        myNonce = 0;
        do {
            myHash = this.hash(message+myNonce);
            myNonce++;
        } while (!/^0{5}\w*/.test(myHash) && myNonce < 10000000
        );
        console.log(`Anzahl der Durchläufe: ${myNonce} mit Resultat ${myHash}`)
        return myHash;
    }

    static hash(message){
        return SHA256(message).toString();
    }

}


module.exports = Block;