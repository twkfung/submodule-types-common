export const throwUnhandledCase = (message: string): never => {
  throw new Error(message)
}

// for prettify IDE display of types
export type Prettify<T extends object> = {
  [key in keyof T]: T[key]
}

export type Awaitable<T> = T | PromiseLike<T>
export type ArrayElement<T> = T extends (infer U)[] ? U : never
export type KeyOfValueType<Object, ValueType> = {
  [K in keyof Object]: Object[K] extends ValueType ? K : never
}[keyof Object]
