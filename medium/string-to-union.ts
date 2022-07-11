/*
Implement the String to Union type. Type take string argument. The output should be a union of input letters

For example

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
*/

type StringToUnion<T extends string> = T extends `${infer Head}${infer Tail}`?  Head | StringToUnion<Tail> : never;
type Test_123 = '123';
type ResultStringToUnion = StringToUnion<Test_123>