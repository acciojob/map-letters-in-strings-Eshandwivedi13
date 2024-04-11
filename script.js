function mapLetters(str) {
	let obj = {};
	for(let i = 0; i< str.length; i++){
		let ch = str[i];
		if(obj[ch] == undefined){
			obj[ch] = [i];
		}else{
			obj[ch].push(i);
		}
	}
}


// const str = prompt("Enter str: ");
alert(JSON.stringify(mapLetters(str)));