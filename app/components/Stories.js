import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ActionButton from 'react-native-action-button';

export default class Stories extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null,
    headerRight: null
  };
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
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

