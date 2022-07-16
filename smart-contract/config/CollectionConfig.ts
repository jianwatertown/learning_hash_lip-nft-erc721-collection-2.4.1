import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RealMandrinkV1',
  tokenName: 'Real Mandrink Token',
  tokenSymbol: 'RMD',
  hiddenMetadataUri: 'ipfs://  QmZXAS3Xke1dXRhGEQz1LKUNXtPp3HLvFAjxiArc8esRZ4/hidden.json',
  maxSupply: 6,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xb2cec94e240c63ca5cfddde9784c4fcb93510210',
  marketplaceIdentifier: 'jian-nft-rmd-v1',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
