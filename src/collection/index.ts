interface IteratorInterface {
  [Symbol.iterator]: any,
  [propName: string]: any;
}

/**
 * 两个集合求差集
 */
 export const difference = (setA: IteratorInterface, setB: IteratorInterface) => {
  const _difference = new Set(setA)
  for (const elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}

/**
 * 两个集合求交集
 */
export const intersection = (setA:IteratorInterface, setB:IteratorInterface) => {
  const _intersection = new Set()
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection
}