const { ethers } = require("hardhat");

const main = async () => {
  const transactionsFactory = await ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();


  // Tidak perlu memanggil deployTransaction.wait(), hanya log alamat kontrak
  console.log("Transactions contract deployed to:", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
