// 把文件大小转换成MB并保留2位小数
export const transformFileSizeToMB = (value:number) => {
  return (value / 1024 / 1024).toFixed(2)
}