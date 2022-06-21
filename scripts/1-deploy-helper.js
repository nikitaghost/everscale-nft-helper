async function main() {
  const Helper = await locklift.factory.getContract('NFTIndexHelper');
  const Index = await locklift.factory.getContract('Index');
  const IndexBasis = await locklift.factory.getContract('IndexBasis');
  const [keyPair] = await locklift.keys.getKeyPairs();
  
  const helper = await locklift.giver.deployContract({
    contract: Helper,
    constructorParams: {
      codeIndex: Index.code,
      codeIndexBasis: IndexBasis.code
    },
    initParams: {
    },
    keyPair,
  }, locklift.utils.convertCrystal(0.3, 'nano'));
  
  console.log(`Helper deployed at: ${helper.address}`);
}


main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
