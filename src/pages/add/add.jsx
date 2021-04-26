import { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './add.scss'
import { AtForm,AtInput  } from 'taro-ui'
export default class Add extends Component {
    constructor () {
      super(...arguments)
      this.state = {
        value: '',
        value: '',
  
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
    handleChangeclass (value) {
      this.setState({
        valueclass: value
      })
    }
    handleChangenumber (value) {
      this.setState({
        valuenumber:value
      })
    }
    
    render () {
      const gotosearch =()=>{
        Taro.navigateTo({url:'/pages/search/search'})}
        const gotologin =()=>{
          Taro.navigateTo({url:'/pages/search/search'})}
      return (
        
        <View className='box'>
        
          <AtForm>
          <AtInput 
            name='value' 
            title='姓名' 
            type='text' 
            placeholder='' 
            value={this.state.value} 
            onChange={this.handleChange.bind(this)} 
          />
           <AtInput
      name='class'
      title='班级'
      type='text'
      placeholder=''
      value={this.state.valueclass}
      onChange={this.handleChangeclass.bind(this)}
    />
            <AtInput 
            name='value3' 
            title='学号' 
            type='text' 
            placeholder='' 
            value={this.state.valuetelephone} 
            onChange={this.handleChangenumber.bind(this)} 
          />
          <Button onclick={gotosearch}>添加</Button>
          <Button onclick={gotosearch}>返回</Button>
          </AtForm>
        </View>
      )
    }
  }
