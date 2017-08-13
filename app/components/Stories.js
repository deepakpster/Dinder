import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Stories extends Component {
	render() {
		const imgSrc1 = require('./../../images/AlbumsDemo.jpg')
		return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
			<Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>My First Day at Work</Text>
                  <Text note>Joined FireEye</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgSrc1} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>My Second Day at Work</Text>
                  <Text note>Joined FireEye</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgSrc1} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>My Last Day at Work</Text>
                  <Text note>Joined FireEye</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={imgSrc1} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>
		)
	}
}
