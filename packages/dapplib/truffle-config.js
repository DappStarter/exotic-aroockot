require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy radar situate unknown gloom fork tackle gas'; 
let testAccounts = [
"0xa7f713b1e38eb3690d2298ee4cb378b3fe000ab6e7cd1efa3e232ed96f63c8f8",
"0xb36d5added1deb8a30e42f51c58546d7e6d384927ee861f6243be2eb964d0824",
"0x90082c13acb12bf309d81505ceb9af91d7b68aafa2311c53833f572ae16ce6e2",
"0x716cb3c3f23bb3fd054750588e0e1bb4c40d72a980ee529f1d1f82d620fb0dd1",
"0xabf4e8389abf5ff8c87367f1b53210d0b16da0821115a263a9757174cf34d6d8",
"0x8f48f8c1a888b742b84136475fefe2fcf63693f904a8b46a666e9a51ec5565a1",
"0xc6ed5279e1f3c2c742ccaa8d5599656db107c85666d243e8a7e8de3b619e1789",
"0x6b1fa675a51c41c275363f49f27dd795d09811cea0deb5e874189f4dc01d7c27",
"0x9e7e5b0e413fa0c3950c05ea8a2f669faf0606ea39699ca383e42ab802513073",
"0x1f8a986fc6d225fe055c9bbab1c26bcdb8806e1f10aebf97a442516e6d4dfe0d"
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
