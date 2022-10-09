# 简介
lio-fe-util是将作者开发项目时常用得工具函数封装为npm包。主要内容包括

- 数组相关工具函数
- 日期相关工具函数
- 常用正则表达式
- 类型判断工具函数
- 图片相关工具函数
- 其他（常用第三方包）
- 浏览器判断
- blob文件下载
# 日期相关工具函数
formateTime： 将时间戳（毫秒值）转换成时间 (YYYY-MM-DD hh:mm:ss)
```javascript
import { formateTime } from 'mx-dev-util';
changeTime(val) {
  return formateTime(val * 1000);
},
```
formateDate：将时间戳转换成日期 （YYYY-MM-DD）
```javascript
import { formateDate } from 'mx-dev-util'
// template
<p>{formateDate(new Date(new Date().getTime()))}</p>
```
calcTimes：将秒转换成时分秒 （hh:mm:ss）
calcSeconds: 将时分秒（hh:mm:ss）转成秒
# 其他（常用第三方包）
[arrify](https://www.npmjs.com/package/arrify)：将值转为数组
```javascript
import { arrify } from 'mx-dev-util';
const detail = document.getElementById('details')
const imgs = arrify(detail.getElementsByTagName('img'));
imgs.forEach((item) => {
  item.width = 400
  item.height = 220
})
```
[omit](https://www.npmjs.com/package/omit.js)：删除对象中得属性
```javascript
import { omit } from 'mx-dev-util';
await editAppointmentInfo({
  ...omit(this.form, ['timeArr']),
});
```
[await-to-js](https://www.npmjs.com/package/omit.js): 对async await 进行封装以便更好地进行错误处理
```javascript
import { to } from 'mx-dev-util'
async getServiceList() {
  const [error, data] = await to(listStoreService({
    status: 1,
    company_id: this.$store.state.common.userInfo.company_id
  }));
  if (data) {
    this.serviceArr = data.records;
  }
  if (error) {
    this.$message.error(error.data.remark);
  }
},
```
浏览器判断
[https://blog.csdn.net/zzddada/article/details/112986320](https://blog.csdn.net/zzddada/article/details/112986320)
blob文件下载
[https://blog.csdn.net/zH1_234567/article/details/125594257](https://blog.csdn.net/zH1_234567/article/details/125594257)
