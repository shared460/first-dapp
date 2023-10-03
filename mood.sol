//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MoodDiary{
     string mood;
     
     function setMood(string memory _mood) public{
          mood = _mood;
     }

     function getMood() public view returns (string memory){
          return(mood);
     }
}



//contract deployed address 0x4135De14305Ea6ac289A5A1B3386BBd8157406B9

//ABI ->
/*
     [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
*/ 