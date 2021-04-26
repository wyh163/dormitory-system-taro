import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import { AtForm,AtInput  } from 'taro-ui'
import Taro from '@tarojs/taro'
import './register.scss'
import service from '../service'
export default class Register extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      account: '',
      Pwd: '',
      pho:'',
    }
  }
  componentWillMount () {}
  componentDidMount () {
    console.log('before service')
    service.getFilmlist().then(ret=>{
   console.log(ret)
   this.setState({
     account: ret.data.data.list[0].Title   
   })
   this.setState({
     Pwd: ret.data.data.list[1].Title
   })
   this.setState({
    pho: ret.data.data.list[2].Title
  })
 })
 }
 
  componentWillUnmount (){}

  componentDidShow (){}

  componentDidHide () {}
  handleChange (account) {
    this.setState({
      account
    })
  }
  handleChangePwd (Pwd) {
    this.setState({
      Pwd
    })
  }
  handleChangepho (pho) {
    this.setState({
      pho
    })
  }
  
  render () {
    const gotoindex =()=>{
      Taro.navigateTo({url:'/pages/index/index'})}
      const gotologin =()=>{
        Taro.navigateTo({url:'/pages/login/login'})}
    return (
      
      <View className='box'>
      
        <AtForm>
        <AtInput 
          name='account' 
          title='账号' 
          type='text' 
          placeholder='' 
          value={this.state.account} 
          onChange={this.handleChange.bind(this)} 
        />
         <AtInput
    name='password'
    title='密码'
    type='password'
    placeholder=''
    value={this.state.Pwd}
    onChange={this.handleChangePwd.bind(this)}
  />
   <AtInput
    name='phone'
    border={false}
    title='手机号码'
    type='phone'
    placeholder='手机号码'
    value={this.state.pho}
    onChange={this.handleChangepho.bind(this)}
  />
        <Button onclick={gotologin}>完成</Button>
        <Button onclick={gotoindex}>返回</Button>
        </AtForm>
      </View>
    )
  }
}
