/*
Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

For example

type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

*/

type ReplaceAll<
	T extends string,
	From extends string,
	To extends string
> = T extends `${infer Head}${From}${infer Tail}`
	? ReplaceAll<`${Head}${To}${Tail}`, From, To>
	: T;
type replaced_2 = ReplaceAll<'t y p e s', ' ', ''>;

type replace_3 = ReplaceAll<'this is the first time I do that', 't', 'b'>;
