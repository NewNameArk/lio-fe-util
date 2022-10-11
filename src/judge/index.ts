interface MyObject {
  [key: string]: any;
}
// 判空
export function isGeneralizedEmpty(v: any) {
  switch (typeof v) {
    case 'undefined':
      return true
    case 'string':
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
      break
    case 'number':
      if (0 === v || isNaN(v)) return true
      break
    case 'object':
      if (null === v || v.length === 0) return true
      for (var i in v) {
        return false
      }
      return true
  }
  return false
}
// 是否为空对象
export function isEmptyObject(obj = {}) {
  for (let i in Object.keys(obj)) {
    return false // 进入循环即不为空
  }
  return true
}
// 判断是否为数字
export function isNumberByReg(val:any) {
  var regPos = /^\d+(\.\d+)?$/ // 非负浮点数
  var regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}
// 判断是否为正负整型数字
export function isInteger(val:any) {
  var regPos = / ^\d+$/ // 非负整数
  var regNeg = /^-[1-9][0-9]*$/ // 负整数
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}
// 判断数组是否重复
export function isArrRepeat(arr: any[]) {
  const hashObject : MyObject = {} 
  for (let i = 0; i < arr.length; i++) {
    if (hashObject[arr[i]]) {
      return arr[i]
    } else {
      hashObject[arr[i]] = true
    }
  }
}

const toString = Object.prototype.toString;

export const isPromise = (obj: any): boolean =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export const isArray = (val: any) : boolean => {
  return Array.isArray(val);
}

export function isUndef (v: any): boolean {
  return v === undefined || v === null
}

export function isDef (v: any) : boolean{
  return v !== undefined && v !== null
}

export function isTrue (v: any) : boolean{
  return v === true
}

export function isFalse (v: any): boolean {
  return v === false
}

export const isUndefined = (val: any) : boolean => {
  return typeof val === 'undefined';
}

export function isString(val: any) : boolean {
  return typeof val === 'string';
}

export function isNumber(val: any) : boolean{
  return typeof val === 'number';
}

export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object';
}

export function isPlainObject (obj: any) : boolean {
  return toString.call(obj) === '[object Object]'
}

export function isFormData(val: any) : boolean{
  return toString.call(val) === '[object FormData]';
}

export function isDate(val: any): boolean {
  return toString.call(val) === '[object Date]';
}

export function isMap(val: any): boolean {
  return toString.call(val) === '[object Map]';
}

export function isSet(val: any): boolean {
  return toString.call(val) === '[object Set]';
}

export function isFile(val: any) : boolean {
  return toString.call(val) === '[object File]';
}

export function isBlob(val: any): boolean {
  return toString.call(val) === '[object Blob]';
}

export function isFunction(val: any): boolean {
  return toString.call(val) === '[object Function]';
}

export function isURLSearchParams(val: any): boolean {
  return toString.call(val) === '[object URLSearchParams]';
}

export function isRegExp (val: any): boolean {
  return toString.call(val) === '[object RegExp]'
}

export function trim(str: string):string {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

export function forEach(obj: any, fn: any) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

export function isPrimitive (value:any): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}