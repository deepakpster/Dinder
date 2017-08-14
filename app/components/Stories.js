import React, { Component } from 'react';
import { Container, View, Header, Content, Card, CardItem, Thumbnail,Footer, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import Carousel from 'react-native-looped-carousel';
import {observer} from 'mobx-react/native'
import {Image, StyleSheet, Dimensions} from 'react-native'

const {width, height } = Dimensions.get('window');
export default class Stories extends Component {
  componentWillMount(){
    const {store, navigation} = this.props
    const {state} = navigation;
    const {auth, user} = state.params
    const {firebase} = auth
    const uid = user.uid
    let setState = this.setState.bind(this)
    let render = this.render.bind(this)
    const userStories = firebase.database().ref('user-stories/' + uid).orderByKey()
    this.setState({userStories})
    userStories.on('value', (snapshot) => {
      console.log('User Stories', snapshot.val())
      const storyVal = snapshot.val()
      Object.keys(storyVal).map((key, index, arr)=>{
        const _flg = (arr.length -1 == index)
        let photos = JSON.parse(storyVal[key].photos)
        storyVal[key].photoURL = []
        photos.map((photo, pcIndx, photosArr)=>{
          const _flg2 = (photosArr.length -1) ==pcIndx
          const storageRef = firebase.storage().ref(uid+ '/stories/'+photo)
          storageRef.getDownloadURL().then(function(url){
            storyVal[key].photoURL.push(url);
            if(_flg && _flg2){
              setState({
                loading: false
              })
            }
          })
        })
      })
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
      loading: true,
      size:{width, height},
      userStories: null
    }
  }
  @observer
	render() {
		const imgSrc1 = require('./../../images/AlbumsDemo.jpg')
    let {stories} = this.state
    const {navigation} = this.props
    const {state} = navigation;
    const {auth, user} = state.params
    const {firebase} = auth
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
                  {
                    (stories[key].photoURL.length>0) ?
                      <CardItem cardBody style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      {stories[key].photoURL.map((photo, ii, arr)=>{
                        return(<Image style={{width:width/arr.length-1, height: 100}} source={{uri:photo}}/>)
                      })
                      }
                      </CardItem>
                    : <Spinner/>
                  }
                  <Footer/>
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
