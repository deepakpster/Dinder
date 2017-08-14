import React, { Component } from 'react'
import {
  Content, 
  Container,
  View,
  Icon,
  Button,
  Text
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'

import AddScreen from './../components/AddStory'
export default class AddStoryScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: navigation.state.params.headerRight,
  })
  componentDidMount(){
    const { setParams } = this.props.navigation;
		const {store} = this.props.navigation.state.params.props
		this.setState({store})
		setParams({
			headerRight: <Button transparent bordered onPress={this.createStory.bind(this)}>
				<Icon name='create' />
    	</Button>
		})
	}
	constructor(props) {
		super(props)
		this.state = {
			store: [],
			loading: false
		};
	}

	uploadPhotos(photos) {
  	const {auth} = this.state.store
    const {firebase} = auth
    photos.map((img, index)=>{
  		const storageRef = firebase.storage().ref(auth.getUser().uid+ '/stories/' + img.filename)
	  	RNFetchBlob.fs.readFile(img.uri, 'base64')
	    .then((data) => {
	    	const message = `data:image/jpg;base64,${data}`
		  	return storageRef.putString(message, 'data_url').then(function(snapshot) {
				});
	    });
    })
  }

	createStory(){
		const {state, props} = this.addScreenRef
		const {store, navigation} = props
    const propstate = navigation.state.params.props.navigation.state.params;
    console.log("Propstate", propstate)
    const {auth, settings, user} = propstate
    const { navigate } = this.props.navigation;
		// const {auth} = this.state.store
    const {firebase} = auth
    const database = firebase.database()
    const uid = user.uid

		if(state.hasPhotos){
			this.uploadPhotos(state.photos)
		}
		// Get a key for a new story.
  	const newStoryKey = firebase.database().ref().child('stories').push().key;
  	let updates = {};
  	let filenames = [];
  	state.photos.map((photo, i)=>{
  		filenames.push(photo.filename)
  	})

  	updates['/user-stories/' + uid + '/' + newStoryKey] = {
	  	title: state.title,
	  	photos: JSON.stringify(filenames),
	  	tagline: state.tagline,
	  	description: state.description,
	  	createdOn: new Date().toISOString()
	  };

	  firebase.database().ref().update(updates)
  	.then(()=>{
  		navigate("Dashboard", {auth, settings, user, title:"", headerRight: null})
  	});


	}
	render() {
		return (
			<Container>
				<Content scrollEnabled={false}>
					<View>
						<AddScreen ref={(addScreenRef) => { this.addScreenRef = addScreenRef; }} {...this.props}/>
					</View>
				</Content>
			</Container>
		)
	}
}
