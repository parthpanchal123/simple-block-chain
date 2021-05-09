import BlockChain from "./src/models/BlockChain.js";
import Block from "./src/models/Block.js";
import Transaction from "./src/models/Transaction.js";

let testBlockChain = new BlockChain();

testBlockChain.addTransaction(new Transaction("a1", "a2", 100));
testBlockChain.addTransaction(new Transaction("a2", "a1", 50));

console.log("Starting the miner");
testBlockChain.minePendingTransactions("my");
console.log(testBlockChain.getBalanceOfAddress("my"));

console.log("Starting the miner again");
testBlockChain.minePendingTransactions("my");

console.log(testBlockChain.getBalanceOfAddress("my"));
