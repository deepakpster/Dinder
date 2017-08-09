import React, { Component } from 'react';
import { CameraRoll, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Albums extends Component {
	constructor(props) {
		super(props)
		this.state = {
			photos: null
		}
	}
	render() {
		const imgSrc1 = require('./../../images/AlbumsDemo.jpg')
		return null
	}

	getPhotos() {
		CameraRoll.getPhotos({
	    first: 20,
	    assetType: 'All'
	  })
	  .then((r) => this.setState({ photos: r.edges }))
	}
}
