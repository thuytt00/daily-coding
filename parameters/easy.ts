/*

Implement the built-in Parameters generic without using it.

For example:

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<foo> // [arg1: string, arg2: number]
*/

const foo = (arg1: string, arg2: number): void => {};
const bar = () => {}
type MyParameters<T extends Function> = T extends (...args: infer Args) => any ? Args : never;
type FunctionParamsType = MyParameters<typeof foo>


