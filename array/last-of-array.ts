/*

TypeScript 4.0 is recommended in this challenge

Implement a generic Last<T> that takes an Array T and returns its last element.

For example

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
*/

type Last<T extends any[]> = T extends []
	? never
	: T extends [...infer _, infer Last]
	? Last
	: never;
type V1 = Last<['a', 'b', 'c']>;



// const arr2LastOfArray = [3, 2, 1];
