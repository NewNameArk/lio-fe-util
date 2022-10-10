// 数组拷贝
export function copyArr(array: any[]) {
  const getArr = (arr: any[] ) => (newArr: any[]) => {
    arr.forEach(element => {
      newArr.push(element);
    });
    return newArr;
  };

  return getArr(array)([]);
}