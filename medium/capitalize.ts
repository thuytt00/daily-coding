/*
Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

For example

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

*/

type CapitalizeType<T extends string> = T extends `${infer Fisrt}${infer Rest}` ? `${Uppercase<Fisrt>}${Rest}` : T;
type capitalized = CapitalizeType<'  hello world'>