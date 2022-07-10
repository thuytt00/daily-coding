/*
Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

In this challenge, you need to type an object or a class -
 whatever you like - to provide two function option(key, value) and get().
 In option, you can extend the current config type by the given key and value.
 We should about to access the final result via get.

For example

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
*/
type Chainable<Option extends object = {}> = {
	option<K extends string, V>(
		key: K extends keyof Option ? never : K,
		value: V
	): Chainable & { [Key in K]: V };
	get(): { [K in keyof Option]: Option[K] };
};



declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:

type Chainable_2<Option extends object = {} >= {
  option<K extends string, V>(key:K extends keyof Option ? never: K, value: V): Chainable_2 & {[Key in K]: V},
  get(): {[K in keyof Option]: Option[K]}
}