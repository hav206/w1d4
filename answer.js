var printCool = (name) => {
	console.log(name + " is cool");
}

console.log(printCool("Kevin"));

var cube = (numb) => {
	return numb * numb * numb;
}

console.log(cube(5));

var isVowl = (char) => {
	switch (char){
		case 'E' : console.log("this is a vowl");
		case 'e' : console.log("this is a vowl");
		return true;
		case 'I' : console.log("this is a vowl");
		case 'i' : console.log("this is a vowl");
		return true;
		case 'O' : console.log("this is a vowl");
		case 'o' : console.log("this is a vowl");
		return true;
		case 'A' : console.log("this is a vowl");
		case 'a' : console.log("this is a vowl");
		return true;
		case 'U' : console.log("this is a vowl");
		return true;
		default:
			return false;

	}

}

console.log(isVowl('e'));



var getTwoLength = (str1, str2) =>{
	var temp = [];
	var l = str1.length;
	var l2 = str2.length;
	temp.push(l);
	temp.push(l2);
	return temp;
}

console.log(getTwoLength("hang", "man game"));

var getMultipleLengths = (str) =>{
	var tempNumber = 0;
	var tempArray = [];
	for (let i  = 0; i < str.length; i++){
		tempNumber = str[i].length;
		tempArray.push(tempNumber);
	}
	return tempArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


const maxOfThree = (array) =>{

	array.sort();
	let n = array[array.length - 1];
	return n;
}

var temp2 = [6, 9, 1, 40, 34, 99,2];
console.log(maxOfThree(temp2));


var printLongestWord = (temp) =>{
	var map = {};
	var word = "";
	var index = -1;
	var lastIndex = -1;
	let numberOfArray = [];
	for (var i = 0; i < temp.length; i++){
		word = temp[i];
		index = temp[i].length;
		numberOfArray.push(index);
		map[index] = word;
	}
	numberOfArray.sort(); // could have used my own sort function to get the largest value. but in the case i've already know the largest value to use for map
	console.log(numberOfArray);
	lastIndex = numberOfArray.length -1;
	return map[12];

}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

var transmogrify = (numb1, numb2, numb3) =>{
	return Math.pow(numb1 * numb2, numb3);
}

console.log(transmogrify(5, 3, 2));

var Fibonacci = (numb) => {
	let first = 1;
	let last = 1;
	let total = 0;
	let temp = [];
	temp.push(first);
	temp.push(last);
	for(var i = 1; i < numb; i++)
	{
		total = first + last;
		temp.push(total);
		first = last;
		last = total;
	}
	console.log(temp);
	console.log(sum(temp));
	var even = evenNumber(temp);
	console.log(noFourMillion(even));
	//console.log(sum(temp));
	//var myarray = evenNumber(temp);
}

//Fibonacci(7);
var sum = (tempArray) => {
	let total = 0;
	for (var i = 0; i < tempArray.length; i++){
		total = total + tempArray[i];
	}
	return total;
}

var evenNumber = (tempArray) => {
	var evenArray = [];
	for(var i = 0; i < tempArray.length; i++){
		if(tempArray[i] % 2 === 0)
		{
			evenArray.push(tempArray[i]);
		}
	}
	return evenArray;
}

var noFourMillion = (tempArray) => {
	var myTotal = 0;
	for (var i = 0; i < tempArray.length; i++){
		if((myTotal += tempArray[i]) != 4000000)
		{
			return true;
		}
		return false;
	}
}



//var array = [2, 4, 6, 8, 9];
Fibonacci(7);
//evenNumber(array);