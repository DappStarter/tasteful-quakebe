require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind concert gesture forest flat slab'; 
let testAccounts = [
"0x77eed04a419da972742e734775f291ce11ef1362eb7af5119d8a8edb76aa98eb",
"0xf110b41e725911023b394046190201819dba1529bcfe64bcbe1bd9528fbc79f7",
"0x0c2ce0aa5770f43c4596f3d5afd0ff07f6f039370726289dc062dd56797bd3cb",
"0x5f7f8781f593610fc1b3fdd201fc0981bd369b06da101d04c62285c3692a6ff0",
"0x38521bccf48eae5a6d03fed48b81eba4cee7568015bb6c92f0d45c04c11cccd4",
"0x4cf270d7a3914c8bf58b3bc50ce6a34fc2f3d962dbdaa1d592eac32d86fbb12e",
"0x4de06158df079f94bd55a47d8ac30d51080d10a0f0ff55124263dec5ed30def6",
"0x45429c75181fa0dc85160b2bb4c8310230c9a38b5c7e21a7c7ba6a212506a789",
"0xa5daa3e2b73d6b51a58aaca5a7d8509e86fa371566c6947efe013b5ae3bc59f4",
"0x44bce7ade4ccadbf7a0d524c153302a2af40660d85f4076c1a9aba5177d9e60a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
