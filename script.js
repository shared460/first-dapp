const moodContractAddress = '0x4135De14305Ea6ac289A5A1B3386BBd8157406B9'
const moodContractABI = [
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

let moodContract = undefined
let signer = undefined 

//this is the connection with the metamask
const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

//Request access to the user's wallet and assign values to MoodContract and signer that 
//were previously set to undefined.

provider.send('eth_requestAccounts', []).then(() => {
     provider.listAccounts().then((accounts) => {
          signer = provider.getSigner(accounts[0]);
          moodContract = new ethers.Contract(
               moodContractAddress,
               moodContractABI,
               signer,
          )
     })
})

async function getMood(){
     const mood = await moodContract.getMood();
     document.getElementById('showMood').innerText = `your Mood: ${mood}`
     console.log(mood);
}

async function setMood(){
     const mood = document.getElementById('mood').value
     await moodContract.setMood(mood)
}