import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base'
const Item = Picker.Item;
export default class SignUp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          fname:"",
          lname:"",
          email:"",
          password: ""
      };
  }
  
  signUp() {
    const { navigate, state } = this.props.navigation;
    const { auth } = state.params;
    console.log("Signing up");
    const {email, password, fname, lname} = this.state;
    auth.signUp({email, password})
	    .then((user) => {
	    	user.updateProfile({
	    		displayName: fname + " " + lname
	    	}).then(()=>{
	    		auth.uploadProfilePicture();
	    		user.sendEmailVerification();
	    	});
	      console.log('User: ', user)
	      console.log('Successful Login')
	      navigate('Home')
	    })
	    .catch((error) => {
	      var errorCode = error.code;
	      var errorMessage = error.message;
	      alert(errorMessage)
	      console.log(error)
	    })
    
  }

  updateFirstName(fname) {
  	this.setState({fname})
  }

  updateLastName(lname) {
  	this.setState({lname})
  }

 	updateEmail(email) {
  	this.setState({email})
  }

  updatePassword(password) {
  	this.setState({password})
  }

  render(){
  	return <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="First" 
          												onChangeText={(fname) => {this.updateFirstName(fname)}}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input inlineLabel label="Last Name" placeholder="Last" 
          												onChangeText={(lname) => {this.updateLastName(lname)}}
                                />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-mail" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" 
          												onChangeText={(email) => {this.updateEmail(email)}}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry 
          												onChangeText={(pwd) => {this.updatePassword(pwd)}}/>
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
							        onPress={this.signUp.bind(this)}>
                      <Text>Sign Up</Text>
                    </Button>
                </Content>
            </Container>
  }
}