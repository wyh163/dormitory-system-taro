import { Component } from 'react'
import { View,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './search.scss'
import { AtForm,AtInput,AtSearchBar  } from 'taro-ui'

export default class Search extends Component {
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
    const gotologin =()=>{
      Taro.navigateTo({url:'/pages/login/login'})}

        
    return (
  
      <View className='box'>
    
          <AtSearchBar
        inputType='number'
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
           <Button onclick={gotologin}>返回</Button>
      </View>
    )
  }
}
