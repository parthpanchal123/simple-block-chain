import BlockChain from "./src/models/BlockChain.js";
import Block from "./src/models/Block.js";

let testBlockChain = new BlockChain();

async function addBlocks() {
  await testBlockChain.addBlock(
    new Block(1, new Date().toDateString(), { amount: 100 })
  );
  await testBlockChain.addBlock(
    new Block(2, new Date().toDateString(), { amount: 10 })
  );
  await testBlockChain.addBlock(
    new Block(3, new Date().toDateString(), { amount: 20 })
  );
  await testBlockChain.addBlock(
    new Block(4, new Date().toDateString(), { amount: 300 })
  );

  console.log(JSON.stringify(testBlockChain, null, 4));
}

addBlocks();
