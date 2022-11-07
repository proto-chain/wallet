import { ethers } from "hardhat";

async function main() {
  const Poker = await ethers.getContractFactory("Poker");
  const poker = await Poker.deploy();

  await poker.deployed();

  console.log(`Poker deployed to ${poker.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
