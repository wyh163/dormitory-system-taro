import Taro from '@tarojs/taro';
import httpservice from './httpservice'
import login from './request'
const service= {
   getFilmlist(){
      return Taro.request({
         url: 'http://127.0.0.1:5000/user/login', 
         data:{
            'account': 'admin',
            'password': 'admin666'
            }, 
         method:'GET',
      })
      //   .then(res => console.log(res.data))
   //   return httpservice.get({
   //    //   url:'http://y-condor.com/article/list?page=1&size=3&Is_chinese=1',
   //       url: 'http://127.0.0.1:5000/user/login'
      // })
      
   }}
// const data = {
//    account: 'admin',
//    password: 'admin666'
// }
// login(data)
   export default service