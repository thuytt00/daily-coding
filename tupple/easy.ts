/*

Give an array, transform into an object type and the key/value must in the given array.

For example

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
*/

type TypeTuple<T> = T extends null | undefined ? never : T[];
type TupleToObject<T extends readonly any[]> = {
	[Key in T[number]]: Key;
};
//
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
//
type result = TupleToObject<typeof tuple>;

