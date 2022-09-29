import { IValue } from 'utils/types'

export function getLastItemValueOfArray<T, U extends keyof T>(
  array: T[],
  property: U
): IValue<T, U> {
  return array[array.length - 1][property]
}
