import argon2 from "argon2";

class Block {
  constructor(index, timestamp, data, prevHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.generateHash();
  }

  async generateHash() {
    try {
      const toHashData =
        this.index + this.timestamp + this.prevHash + JSON.stringify(this.data);
      const hash = await argon2.hash(toHashData);
      return hash;
    } catch (err) {
      console.error(err);
    }
  }
}

export default Block;
