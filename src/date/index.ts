// 转换时间
export const formateTime = (data:any) => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  const hh = (`${dt.getHours()}`).padStart(2, '0');
  const mm = (`${dt.getMinutes()}`).padStart(2, '0');
  const ss = (`${dt.getSeconds()}`).padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
};
// 转换日期
export const formateDate = (data:any) => {
  const da = data || new Date().getTime();
  const dt = new Date(da);
  const y = dt.getFullYear();
  const m = (`${dt.getMonth() + 1}`).padStart(2, '0');
  const d = (`${dt.getDate()}`).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
// 秒转换成时分秒
export const calcTimes = (data:any) => {
  // eslint-disable-next-line radix
  const h = parseInt(data / 3600  as  unknown as string) > 10 ? parseInt(data / 3600 as  unknown as string) : `0${parseInt(data / 3600 as  unknown as string)}`;
  // eslint-disable-next-line radix
  const m = parseInt((data % 3600) / 60 as  unknown as string) > 10 ? parseInt(((data % 3600 ) / 60)as  unknown as string) : `0${parseInt(((data % 3600) / 60) as  unknown as string)}`;
  const s = (data % 3600) % 60 > 10 ? (data % 3600) % 60 : `0${(data % 3600) % 60}`;
  return `${h}:${m}:${s}`;
};
// 时分秒转换成秒
export const calcSeconds = (data:any) => {
  const [h, m, s] = data.split(':');
  return (h * 60 + +m) * 60 + +s;
};