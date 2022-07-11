/*
Merge two types into a new type. Keys of the second type overrides keys of the first type.

For example

type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
*/

type Merge<T extends object, F extends object> = {
	[Key in keyof T | keyof F]: Key extends keyof F
		? F[Key]
		: Key extends keyof T
		? T[Key]
		: never;
};

type foo = {
	name: string;
	age: string;
};
type coo = {
	age: number;
	sex: string;
};

type C = keyof (foo | coo);

type ResultMerge = Merge<foo, coo>;
