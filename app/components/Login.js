import React, { Component } from 'react';
import {
  Content, 
  Button,
  InputGroup,
  Input,
  View,
  Icon,
  Text,
  Spinner
} from 'native-base';

export default class AppContainer extends Component {
  render() {
    return <View>
      <InputGroup style={{marginBottom:10}} borderType="round">
        <Icon style={{color:"#fff"}} name="mail"/>
        <Input style={{color:"#fff"}} placeholderTextColor="#fff" placeholder="Please Enter Email"/>
      </InputGroup>
      <InputGroup style={{marginBottom:10}} borderType="round">
        <Icon style={{color:"#fff"}} name="unlock"/>
        <Input style={{color:"#fff"}} placeholderTextColor="#fff" placeholder="Please Enter Password"/>
      </InputGroup>
      <Button style={{marginBottom:10}} rounded block><Text>Login</Text></Button>
    </View>
  }
}

