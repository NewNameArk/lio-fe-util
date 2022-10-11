interface MyObject {
  [key: string]: any;
}
export function deepClone(origin:any) {
  if (typeof origin !== 'object' && typeof origin !== 'function') {
    return origin
  }
  let target = Array.isArray(origin) ? [] : {} as MyObject
  for (let key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      target[key] = Array.isArray(origin[key])
        ? origin[key]
        : deepClone(origin[key])
    }
  }
  return target
}