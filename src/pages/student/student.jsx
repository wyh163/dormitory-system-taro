import { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './student.scss'
import { AtForm,AtInput,AtSearchBar  } from 'taro-ui'
export default class Student extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''

    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('value')
  }
  render () {
    const gotoadd =()=>{
      Taro.navigateTo({url:'/pages/add/add'})}
      {const gotorevise =()=>{
        Taro.navigateTo({url:'/pages/revise/revise'})}
       { const gotodelete =()=>{
          Taro.navigateTo({url:'/pages/delete/delete'})}
    {const gotologin =()=>{
      Taro.navigateTo({url:'/pages/login/login'})}

        
    return (
  
      <View className='box'>
    
          <AtSearchBar
        inputType='number'
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
          <Button onclick={gotoadd}>添加</Button>
          <Button onclick={gotorevise}>修改</Button>
          <Button onclick={gotodelete}>删除</Button>
          <Button onclick={gotologin}>返回</Button>
      </View>
    )
  }
}}}}

