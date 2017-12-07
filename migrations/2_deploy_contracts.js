var SimpleToken = artifacts.require("./IquidusToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleToken);
};