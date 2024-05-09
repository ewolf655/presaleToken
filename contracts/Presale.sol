pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Presale {
    ERC20 public aToken;
    address public admin;
    uint public exchangeRate;

    constructor(address _aToken, uint _exchangeRate) {
        aToken = ERC20(_aToken);
        admin = msg.sender;
        exchangeRate = _exchangeRate;
    }

    function presale(uint amount) external payable {
        require(msg.value == amount, "Incorrect payment amount");

        uint aTokenAmount = amount * exchangeRate;
        require(aToken.balanceOf(address(this)) >= aTokenAmount, "Insufficient A tokens in presale contract");

        aToken.transfer(msg.sender, aTokenAmount);
    }

    function withdraw() external {
        require(msg.sender == admin, "Only admin can withdraw");
        payable(admin).transfer(address(this).balance);
    }
}
