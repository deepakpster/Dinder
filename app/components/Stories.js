import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {observer} from 'mobx-react/native'

export default class Stories extends Component {
  componentWillMount(){
    const {store, navigation} = this.props
    const {state} = navigation;
    const {auth, user} = state.params
    const {firebase} = auth
    const uid = user.uid
    const userStories = firebase.database().ref('user-stories/' + uid).orderByKey()
    this.setState({userStories})
    userStories.on('value', (snapshot) => {
      console.log('User Stories', snapshot.val())
      const storyVal = snapshot.val()
      this.setState({
        stories: storyVal
      })
      console.log('State', this.state)
    });
  }
  constructor(props){
    super(props)
    this.state ={
      stories:[],
      userStories: null
    }
  }
  @observer
	render() {
		const imgSrc1 = require('./../../images/AlbumsDemo.jpg')
    const {stories} = this.state
		return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
			<Container>
        <Content>
          {
            Object.keys(stories).map((key)=>{
              return (
                <Card key={key}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'Image URL'}} />
                      <Body>
                        <Text>{stories[key].title}</Text>
                        <Text note>{stories[key].tagline}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={imgSrc1} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                </Card>
              )
            })
          }
        </Content>
      </Container>
      </View>
		)
	}
}
