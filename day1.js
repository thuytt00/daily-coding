/* Given a list of numbers and a number k,
return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 1 */

const arr = [0,5,3,7, 2];
const setNumbers = new Set();
const k = 17;
let count = 0;
arr.forEach(item => {
	const difference = k - item;
	if(setNumbers.has(difference)){
		count += 1;
	} else{
		setNumbers.add(item);
	}



})


console.log(count)