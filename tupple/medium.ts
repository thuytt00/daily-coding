/*
Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

For example

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
*/

type MediumTupleToUnion<T extends any[]> = T extends [] ? never : T[number]

type Arr = ['1', '2', '3']

type Test = MediumTupleToUnion<Arr>