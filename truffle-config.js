const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: 'M9VPNYCU7MTXII9MJXFHMVZXF5IM5YNXTI'
    },
    contracts_build_directory: path.join(__dirname,"client/src/contracts"),
    networks:{
        development:{
            host:'127.0.0.1',
            port: 7545,
            network_id:"*"
        },
        bsc_testnet: {
            provider: () => new HDWalletProvider(
                'wealth inner crane dawn current desert fatigue powder fitness sadness season tree',
                `https://data-seed-prebsc-2-s1.binance.org:8545/`, 0),
            from: "0x8e5c82c8c1EE688013e6982A22E072295852B1cA",
            gas: "4500000",
            gasPrice: "10000000000",
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 1000,
            skipDryRun: true
        }
    },
    compilers:{
        solc:{
            version:"0.8.0"
        }
    }
}