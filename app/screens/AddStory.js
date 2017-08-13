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

import AddScreen from './../components/AddStory'
export default class AddStoryScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <Button transparent bordered onPress={this.createStory}>
				<Icon name='create' />
			</Button>
  })
	constructor(props) {
		super(props)
	}
	createStory(){
		console.log('Create new story');
	}
	render() {
		return (
			<Container>
				<Content scrollEnabled={false}>
					<View>
						<AddScreen {...this.props}/>
					</View>
				</Content>
			</Container>
		)
	}
}
