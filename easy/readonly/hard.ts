/*

Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possible.

For example

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
*/

type DeepReadonly<T> = {
	readonly [Key in keyof T]: keyof T[Key] extends never
		? T[Key]
		: DeepReadonly<T[Key]>;
};

type X = {
	x: {
		a: 1;
		b: 'hi';
		c: {
			e: 'aaaa';
		};
	};
	y: 'hey';
};

type NewTypeReadOnly = DeepReadonly<X>;

const todoWithReadOnly: NewTypeReadOnly = {
	x: {
		a: 1,
		b: 'hi',
		c: {
			e: 'aaaa'
		}
	},
	y: 'hey'
};

