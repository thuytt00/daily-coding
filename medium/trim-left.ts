/*
Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
*/
type EmptyString = ' ' | '\n' | '\t';
type TrimLeft<T extends string> = T extends `${EmptyString}${infer Rest}`
	? TrimLeft<Rest>
	: T;

	type TrimRight<T extends string> = T extends `${infer Rest}${EmptyString}`
	? TrimRight<Rest>
	: T;

type trimed = TrimLeft<'  Hello World  '>;

type Trim<T extends string> = TrimLeft<TrimRight<T>>
type trimEntire = Trim<'  Hello World  '>;
