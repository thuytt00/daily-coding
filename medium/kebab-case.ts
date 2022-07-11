/*
FooBarBaz -> foo-bar-baz
*/

type KebabCase<T extends string> = T extends `${infer Head}${infer Rest}`
	? Rest extends Uncapitalize<Rest>
		? `${Lowercase<Head>}${KebabCase<Rest>}`
		: `${Lowercase<Head>}-${KebabCase<Rest>}`
	: T;

	type ResKebab = KebabCase<"FoOBarCar">