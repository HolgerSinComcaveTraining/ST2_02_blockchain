
// Klasse
class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
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
        return new this("Genesis time","-----","qakjnfqefjn",["data1", "data2"]);

        // const timestamp = Date.now();
        // const lastHash  = "-----";
        // const hash      = this.digestMessage(timestamp + lastHash + ownData);

        // return new this(timestamp, lastHash, hash, ownData);
    }

    static mineBlock(lastBlock, ownData){
        const timestamp = Date.now();
        const lastHash  = lastBlock.hash;
        const hash      = "hash To do" //this.digestMessage(timestamp + lastHash + ownData);

        return new this(timestamp, lastHash, hash, ownData);
    }

    static async digestMessage(message) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const hash =  await crypto.subtle.digest('SHA-256', data);
        return hash;
      }
}


module.exports = Block;