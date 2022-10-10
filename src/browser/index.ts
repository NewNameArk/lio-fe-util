// blob转文件:图片或者视频
export function saveBlobAsFile(blob:Blob, filename:string) {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    // fix Firefox
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
}


//获取图片或者視頻的Blob值
export function getMediaBlob(url: string) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (this.status == 200) {
        console.log('response', this.response)
        resolve(this.response)
      } else {
        reject('error')
      }
    }
    xhr.onerror = function (e) {
      reject(e)
    }
    xhr.send()
  })
}

// blob数据转成ArrayBuffer
export function blobToArrayBuffer(blob: Blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = function (e:any) {
      resolve(e.target.result)
    }
    reader.readAsArrayBuffer(blob)
  })
}

export function blobToArrayBuffer2(blob: Blob) {
  return blob.arrayBuffer()
}


/**
 * 前端导出excel 
 * @param data 请求的blob数据
 * @param name 下载文件的名字，例如'预约列表.xls'
 */
export const exportExcel = (data: any, name: string) => {
  const dataUrl = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.ms-excel' }));
  const aDom = document.createElement('a');
  aDom.style.display = 'none';
  aDom.href = dataUrl;
  aDom.setAttribute('download', name);
  document.body.appendChild(aDom);
  aDom.click();
  document.body.removeChild(aDom);
} 