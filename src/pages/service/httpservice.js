import Taro from '@tarojs/taro'

export default{
  request(option,method='GET'){
  return Taro.request({
  ...option,
    method,
 header: {
    'content-type': 'application/json' ,
    ...option.header
  }

} )
},
     get(option){
     return this.request(option,'GET')
}
}
