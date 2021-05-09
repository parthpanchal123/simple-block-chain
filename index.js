const BlockChain = require("./src/models/BlockChain.js");
const Transaction = require("./src/models/Transaction.js");
const { PUBLIC_KEY, PRIVATE_KEY } = require("./config");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

console.log(PUBLIC_KEY);
const myKey = ec.keyFromPrivate(PRIVATE_KEY);
const myWalletAddress = myKey.getPublic("hex");
let testBlockChain = new BlockChain();

const tx1 = new Transaction(myWalletAddress, "some public key", 10);
tx1.signTransaction(myKey);

testBlockChain.addTransaction(tx1);

console.log("Starting the miner");
testBlockChain.minePendingTransactions(myWalletAddress);
console.log(testBlockChain.getBalanceOfAddress(myWalletAddress));

console.log("Is chain valid", testBlockChain.isChainValid());
