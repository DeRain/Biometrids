pragma solidity 0.4.18;


contract RefundVaultInterface {
    function deposit(address investor) public payable;

    function close() public;

    function enableRefunds() public;

    function refund(address investor) public;

    function getWallet() public constant returns (address);

    function isRefundVault() public constant returns (bool);
}
