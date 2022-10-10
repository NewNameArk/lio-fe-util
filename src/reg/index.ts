// 手机号码
const mobilePhoneReg = /^1[0-9]{10}$/

// 手机号码（严格版本）
const strictMobilePhoneReg = /^1[3|4|5|7|8|9][0-9]\d{8}$/

// 固定电话号码
const fixedTelReg = /^([0-9]{3,4}-)?[0-9]{7,8}$/

// 固定电话号码(严格版本)
const strictFixedTelReg =  /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))|(400-[0-9]{0,7}-[0-9]{1,7})$/

// 电子邮件
const emailReg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/

// URL地址
const urlReg = /^http[s]?:\/\/.*/

// 带有参数的url地址
const urlWithParamsReg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/

// 身份证号
const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 汉字
const chineseReg = /[\u4E00-\u9FA5]/

// 数字
const  numberReg = /\d+/

// 数字0-9
const number0_9Reg = /[0-9]/

// 大于0的整数（正整数） /^[0-9]*[1-9][0-9]*$/
const numGreaterThan0Reg = /^[0-9]*[1-9][0-9]*$/

// 浮点数格式
const floatNumberReg = /^(\d+(\.\d+)?)$/

// 整数或者小数保留两位
const intOrFloatFixed2Reg = /^(\d+)(\.?\d{0,2})?$/

// 字母
const charReg = /[a-zA-Z]/

// 字母和数字
const numberCharReg = /^([A-Za-z0-9]*$)/

// 大写英文字母和数字
const numberUpperCharReg = /^[A-Z0-9]*$/

// 除字母数字外的特殊符号
const specialCharReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/

// 数字字母和汉字
const numberCharChineseReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/

// 车辆vin（VIN由17位大写字母或数字组成）
const vinReg = /^[A-Z0-9]{17}$/


//更多可参考 https://blog.csdn.net/namechenfl/article/details/99714385
//正则表达式基础 https://mp.weixin.qq.com/s/eutSdSt5R-D09DXMJZaQ4A