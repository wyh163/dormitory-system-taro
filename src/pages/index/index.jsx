import { Component } from 'react'
import { View, text,Button,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import service from '../service'
import sde from '../image/sde.jpg'

export default class Index extends Component {
  
   config ={
     navigationBarTitleText:'首页'
   }
   state={
     name:''
   }
   componentDidMount () {
       service.getFilmlist().then(ret=>{
      console.log(ret)
      this.setState({
        name: ret.data.data.list[0].Title   
      })
      this.setState({
        name1: ret.data.data.list[1].Title
      })
      this.setState({
        name2: ret.data.data.list[2].Title
      })
    })
    }

  render () {
    const gotologin =()=>{
      Taro.navigateTo({url:'/pages/login/login'})}
     { const gotoregister =()=>{
        Taro.navigateTo({url:'/pages/register/register'})
    }
    return (
      <View >
       <text className="test">欢迎来到学生宿舍管理系统</text>
      
        <image src="../image/sde.jpg" className="img"  >
        </image>
        <Button className="btn"onclick={gotoregister}>注册</Button>
        <Button  className="btn" onclick={gotologin}>登录</Button>
      </View>
    )
  }
}}
