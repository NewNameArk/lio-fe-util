export const getStorage = (key:string) => {
  return JSON.parse(sessionStorage.getItem(key)!)
}

export const removeStorage = (key:string) => {
  sessionStorage.removeItem(key)
}