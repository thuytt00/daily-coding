/*

Implement the built-in Exclude<T, U>

Exclude from T those types that are assignable to U
*/

type MyExclude<T, U> = T extends U ? never: T;

type ResExclude = MyExclude<"a" | "b" | "c", "a">;

const arraryEx = ['s', 'b', 'c'] as const;

type ResUnion = typeof arraryEx;