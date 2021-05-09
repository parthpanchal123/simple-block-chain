import Block from "./Block.js";
class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  //* This is the initial Block in the block chain
  createGenesisBlock() {
    return new Block(0, new Date().toDateString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  async addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = await newBlock.generateHash();
    this.chain.push(newBlock);
  }
}

export default BlockChain;
