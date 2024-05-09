// sleep function using Promise and setTimeout
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying Presale contracts with the account:", deployer.address);
    
    let presaleAddress;
    let myUSDCTokenAddress = "0xbDd2D3511d2D47e0d3d3FE963e293C0B8e423DBb";

    let Presale = await ethers.getContractFactory("Presale");
    const presale = await Presale.deploy(myUSDCTokenAddress, 10);
    await presale.deployed();
    presaleAddress = presale.address;
    console.log("Presale address:", presaleAddress);

    await sleep(12000);
    await hre.run("verify:verify", {
      address: presaleAddress,
      constructorArguments: [myUSDCTokenAddress, 10],
    });
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });