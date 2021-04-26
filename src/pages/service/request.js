import Taro from '@tarojs/taro';
import api from './api';
export function getJSON(url, data){
    Taro.request({
      url:url, 
      data:data, 
      method:'GET',
    })
      .then(res => console.log(res.data))
}

export function postJSON(url, data){
    Taro.request({
      url:url, 
      data:data, 
      method:'POST'
  })
    .then(res => console.log(res.data))
}
export function register(data) {
  postJSON(apiObject.register, data)
}

export function login(data) {
  getJSON(api.login, data)
}

export function getCheckList() {
  getJSON(apiObject.getCheckList)
}

export function updateCheckList() {
  getJSON(apiObject.updateCheckList)
}

export function leaverecord_add() {
  getJSON(apiObject.leaverecord_add)
}

export function leaverecord_query() {
  getJSON(apiObject.leaverecord_query)
}

export function leaverecord_modify() {
  getJSON(apiObject.leaverecord_modify)
}

export function leaverecord_delete() {
  getJSON(apiObject.leaverecord_delete)
}

export function inoutthing_query() {
  getJSON(apiObject.inoutthing_query)
}

export function inoutthing_add() {
  getJSON(apiObject.inoutthing_add)
}
