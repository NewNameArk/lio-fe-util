const add = (a:number ,b:number) => a+b

test('基本测试', () => {
  expect(add(1,2)).toBe(3)
})