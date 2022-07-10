/*
Implement permutation type that transforms union types into the array that includes permutations of unions.

HOAN VI

type perm = Permutation<'A' | 'B' | 'C'>;
// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

*/

type Permutation<T, U = T> = [T] extends [never]
	? []
	: T extends U
	? [T, ...Permutation<Exclude<U, T>>]
	: [];

type perm = Permutation<0| '1'| "2">;

