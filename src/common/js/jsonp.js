import originJsonp from 'jsonp'

export default function jsonp(url, data, options) {
  url += (url.indexOf('?') > -1 ? '' : '?') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(obj) {
  let ret = ''

  for (let k in obj) {
    let v = obj[k]
    if (v !== '') {
      ret += `&${k}=` + encodeURIComponent(v)
    }
  }

  return ret ? ret.slice(1) : ''
}