const DigiExTokenSale= artifacts.require('DigiExTokenSale');

module.exports = function (deployer) { 
    deployer.deploy(DigiExTokenSale,'0x23469B72Bca44e937DFD00E4018B10bD614AC52d')
 }