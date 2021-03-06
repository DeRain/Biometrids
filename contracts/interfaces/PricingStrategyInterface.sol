pragma solidity 0.4.18;


contract PricingStrategyInterface {
    function isPricingStrategy() public constant returns (bool);

    function initPricingStrategy(uint256 _startingTimestamp) public;

    function strategyInitialized() public constant returns (bool);

    function calculateTokenAmount(uint256 _weiSent, uint _decimals) public constant returns (uint256 tokens);
}
