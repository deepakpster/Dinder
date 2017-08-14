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

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: null
    }
  }
  updateEmail(email){
    this.setState({email})
  }
  updatePassword(password){
    this.setState({password})
  }
  signIn(){
    const {auth} = this.props.store
    const {settings} = this.props.store
    const {email, password} = this.state
    const { navigate } = this.props.navigation;

    this.setState({loading:true}, () =>{
      auth.signIn({email, password})
        .then((user) => {
          console.log('User: ', user);
          console.log('Successful Login');
          if(user.emailVerified && user.uid) {
            navigate('Dashboard', {auth,  settings, user, title:"", headerRight: null})
          } else {
            alert('Please acknowledge the verification email sent to your email address.')
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
          } else {
              alert(errorMessage);         
          }
          console.log(error);
        })
    })
  }

  signUp() {
    const {auth} = this.props.store
    const { navigate } = this.props.navigation;
    navigate('SignUp', {auth})
  }

  render() {
    const {auth} = this.props.store;
    const {loading} = this.state;
    return <View>
      <InputGroup style={{marginBottom:10}} borderType="round">
        <Icon style={{color:"#fff"}} name="mail"/>
        <Input style={{color:"#fff"}}
          placeholderTextColor="#fff"
          placeholder="Email"
          onChangeText={(email) => {this.updateEmail(email)}}
        />
      </InputGroup>
      <InputGroup style={{marginBottom:10}} borderType="round">
        <Icon style={{color:"#fff"}} name="unlock"/>
        <Input style={{color:"#fff"}}
          placeholderTextColor="#fff"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(pass) => {this.updatePassword(pass)}}
        />
      </InputGroup>
      <Button style={{marginBottom:10}} block
        onPress={this.signIn.bind(this)}
      ><Text>Login</Text></Button>
      <Button block transparent
        onPress={this.signUp.bind(this)}>
        <Text>Register</Text>
      </Button>
    </View>
  }
}

