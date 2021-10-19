
const SHA256 = require("crypto-js/sha256");

let myNonce;
const leadingZeros = 5;
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
        const lastHash  = "";
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
        let startTime = Date.now();
        let myHash;
        let pattern = "^0{"+leadingZeros+"}\w*";
        let regex = new RegExp(pattern);
        myNonce = 0;
        do {
            myHash = this.hash(message+myNonce);
            myNonce++;
        } while (!regex.test(myHash) && myNonce < 10000000
        );
        let endTime = Date.now();
        
        console.log(`Anzahl der Durchläufe: ${myNonce} mit Resultat ${myHash} mit ${myNonce*1000/(endTime-startTime)} Berechnungen pro Sekunde`)
        return myHash;
    }

    static hash(message){
        return SHA256(message).toString();
    }

}


module.exports = Block;