import { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import './login.scss'
import Taro from '@tarojs/taro'
import { AtForm,AtInput  } from 'taro-ui'
export default class Login extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      account: '',
      Pwd: '',

    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
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
  
  render () {
    const gotostudent =()=>{
      Taro.navigateTo({url:'/pages/student/student'});
    }
      const gotoindex =()=>{
        Taro.navigateTo({url:'/pages/index/index'})}
        const gotosearch =()=>{ 
          Taro.navigateTo({url:'/pages/search/search'})}
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
        <Button onclick={gotostudent}>完成</Button>
        <Button onclick={gotoindex}>返回</Button>
        <Button onclick={gotosearch}>返回</Button>
        </AtForm>
      </View>
    )
  }
}