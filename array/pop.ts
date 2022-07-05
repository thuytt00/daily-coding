/*
TypeScript 4.0 is recommended in this challenge

Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

For example

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
Extra: Similarly, can you implement Shift, Push and Unshift as well?
*/

type Pop<T extends any[]> = T extends []
	? never
	: T extends [...infer P, infer _]
	? P
	: never;
type arrPop1 = ['a', 'b', 'c', 'd'];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']

type Shift<T extends any[]> = T extends []
	? never
	: T extends [infer _, ...infer Rest]
	? Rest
	: never;

type resShift = Shift<arrPop1>;

type Push<T extends any[], K> = T extends [...infer R] ? [...R, K] : never;

type resPush = Push<arrPop1, 'a'>;

type resPush2 = Push<[], 'h'>;


