// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface WContract {
    function attempt() external;
}

contract Sender {
    function send(address _contract) public {
        return WContract(_contract).attempt();
    }
}