/*
In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

For example:

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

*/

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
	? First extends any[]
		? Flatten<[...First, ...Rest]>
		: [First, ...Flatten<Rest>]
	: [];
type flatten = Flatten<[1, 2,[[ [3, 4], [[[5]]]]]]>;
type flatten_2 = Flatten<[[[1], 2],[[1, [[[[[0]]]]]]], [3, 4], [[[5]]]]>;
