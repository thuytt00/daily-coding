/*

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?

This question is ported from the original article by @maciejsikora*/

type Transform<T> = T extends Promise<infer ResultType> ? ResultType : never;

/*
In order to unwrap the promise type we have used infer keyword.
The keyword is helpful with any type constructor, type constructor is a type parameterized by another type variable,
 so any type which has generic placeholder like A<B>, where A is type constructor parametrized by B.
*/
type Result = Transform<Promise<{ field: string }>>;
