export function sliceLength<T, U>(length: number, arr1: T[], arr2: U[]) {
  let loop = true
  return () => {
    return new Array(length)
      .fill(0)
      .map(() => {
        if (loop) {
          loop = false
          return arr1.length ? arr1.shift() : arr2.shift()
        } else {
          loop = true
          return arr2.length ? arr2.shift() : arr1.shift()
        }
      })
      .filter((unEmpty) => unEmpty)
  }
}
