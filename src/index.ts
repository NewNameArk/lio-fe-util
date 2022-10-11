import {
  formateTime,
  formateDate,
  calcTimes,
  calcSeconds
} from './date/index'

import {
  mobilePhoneReg,
  strictMobilePhoneReg,
  fixedTelReg,
  strictFixedTelReg,
  emailReg,
  urlReg,
  urlWithParamsReg,
  idCardReg,
  chineseReg,
  numberReg,
  number0_9Reg,
  numGreaterThan0Reg,
  floatNumberReg,
  intOrFloatFixed2Reg,
  charReg,
  numberCharReg,
  numberUpperCharReg,
  specialCharReg,
  numberCharChineseReg,
  vinReg,
  ipReg
} from './reg/index'

import {
  isGeneralizedEmpty,
  isEmptyObject,
  isNumberByReg,
  isInteger,
  isArrRepeat,
  isPromise,
  isArray,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isUndefined,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isFormData,
  isDate,
  isMap,
  isSet,
  isFile,
  isBlob,
  isFunction,
  isURLSearchParams,
  isRegExp,
  trim,
  forEach,
  isPrimitive
} from './judge/index'

import {
  difference,
  intersection
} from './collection/index'


import { deepClone } from './util/index'

import {
  setStore,
  getStore,
  clearStore,
  clearAll
} from './localStorage/index'

import {
  saveBlobAsFile,
  getMediaBlob,
  blobToArrayBuffer,
  blobToArrayBuffer2,
  exportExcel
} from './browser/index'

import {
  transformByteToMB
} from './binary/index'

import {
  copyArr
} from './arr/index'

import other from './other/index'
const to = other.to
const omit = other.omit
const arrify = other.arrify

// 还需要增加浏览器类型判断

export {
  formateTime,
  formateDate,
  calcTimes,
  calcSeconds,
  to,
  omit,
  arrify,
  mobilePhoneReg,
  strictMobilePhoneReg,
  fixedTelReg,
  strictFixedTelReg,
  emailReg,
  urlReg,
  urlWithParamsReg,
  idCardReg,
  chineseReg,
  numberReg,
  number0_9Reg,
  numGreaterThan0Reg,
  floatNumberReg,
  intOrFloatFixed2Reg,
  charReg,
  numberCharReg,
  numberUpperCharReg,
  specialCharReg,
  numberCharChineseReg,
  vinReg,
  ipReg,
  isGeneralizedEmpty,
  isEmptyObject,
  isNumberByReg,
  isInteger,
  isArrRepeat,
  isPromise,
  isArray,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isUndefined,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isFormData,
  isDate,
  isMap,
  isSet,
  isFile,
  isBlob,
  isFunction,
  isURLSearchParams,
  isRegExp,
  trim,
  forEach,
  isPrimitive,
  deepClone,
  setStore,
  getStore,
  clearStore,
  clearAll,
  difference,
  intersection,
  saveBlobAsFile,
  getMediaBlob,
  blobToArrayBuffer,
  blobToArrayBuffer2,
  exportExcel,
  transformByteToMB,
  copyArr
}