import httpservice from './httpservice'

const service= {
  getFilmlist(){
    return httpservice.get({
       url:' http://127.0.0.1:5000/',
     })
  }}
  export default service    