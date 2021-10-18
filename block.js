
// Klasse
class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}          `
    }

    static genesis(){ // 1. Block der chain
        return new this("Genesis time","-----","xABc1234",["data1","data2"]); // call constructor
    }



}

module.exports = Block; // Export al Modul