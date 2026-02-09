//your JS code here. If required.

const text = document.querySelector("#text");
const delay = document.querySelector("#delay");
const submitBtn = document.querySelector("#btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click",async (e)=>{
	e.preventDefault();
	let textDisplay = text.value ;
	let delayDisplay = parseInt(delay.value);
	await display(textDisplay,delayDisplay);
	text.value = ""
	delay.value = ""
	
})

async function display(text,delay){
	setTimeout(()=>{
		output.innerHTML = text ;
	},delay)
	
}

