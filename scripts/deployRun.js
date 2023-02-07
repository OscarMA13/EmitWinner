const hre = require("hardhat");

async function main() {

  const Sender = await hre.ethers.getContractFactory("Sender");
  const sender = await Sender.deploy();

  await sender.deployed();
  console.log(`---- Contract was deployed to https://goerli.etherscan.io/address/${sender.address} !----`);

  const WContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  console.log(`\n... Now attempting to run function at https://goerli.etherscan.io/address/${WContract}#code ...`);

  const response = await sender.send(WContract);


  response.hash && console.log(`\n\n SUCCESS!! View your success transaction at https://goerli.etherscan.io/tx/${response.hash} \n\n`);
  console.log(response);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});