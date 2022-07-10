/* '
Implement Replace<S, From, To> which replace the string From with To once in the given string S

For example

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

*/
type Replace<T extends string,From extends string, To extends string> = T extends "" ? T : T extends `${infer Head}${From}${infer Rest}` ? `${Head}${To}${Rest}` : T;
type replaced = Replace<'types are fun!', 'fun', 'awesome'>






