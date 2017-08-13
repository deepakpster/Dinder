import React, { Component } from 'react';
import {
	Container,
	Header,
	Left,
	Title,
	Body,
	Right,
	Content,
  Text,
  Input,
  Label,
  Item,
  Tab, 
  Icon,
  Tabs,
  Button,
  Form,	
  ScrollableTab,
  View
} from 'native-base';
import {Image, StyleSheet, Dimensions, TextInput, Modal, TouchableHighlight} from 'react-native'
import Carousel from 'react-native-looped-carousel';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CameraRollPicker from 'react-native-camera-roll-picker';

const {width, height } = Dimensions.get('window');
export default class AddStory extends Component {
	constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      size: { width, height },
      photos:[],
      selected:[],
      modalVisible: false,
      hasPhotos: false
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  showAlbum(){
  	const {photos} = this.state
  	console.log("Show Album");
  	this._selPhotos = _.clone(this.state.photos);
  	this.setState({selected : _.clone(this.state.photos)})
  	this.setModalVisible(true);
  }
  setPhotos(selected){
  	this.setState({selected});
  }
 	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  photosSelected(){
  	const {photos, selected} = this.state
		this.setState({
			photos: _.clone(selected),
			hasPhotos: selected.length>0
		})
  	this.setModalVisible(false);
  }

  selectionCancelled(){
  	this.setModalVisible(false)
  }
  render() {
  	const {hasPhotos, size, photos, tmp_photos} = this.state;
  	const _this = this;
    return (
    	<Container>
        <Content>
          <Grid>
            <Row style={{ backgroundColor: '#fff',height: hasPhotos ? height/3 : (height/6) }}>
							<Modal
			          animationType={"slide"}
			          transparent={false}
			          visible={this.state.modalVisible}
			          onRequestClose={() => {alert("Modal has been closed.")}}
			          >
			          <Header>
			          	<Left>
				            <Button transparent onPress={this.selectionCancelled.bind(this)}>
				            	<Text>Cancel</Text>
				            </Button>
				          </Left>
				          <Body>
				            <Title>Select Images</Title>
				          </Body>
				          <Right>
				          	<Button transparent onPress={this.photosSelected.bind(this)}>
				          		<Text>Done</Text>
				            </Button>
				          </Right>
			          </Header>
								<CameraRollPicker style={{flex:1}} selected={this.state.selected} callback={this.setPhotos.bind(this)} />
		          </Modal>
	            {!hasPhotos ? 
			            <View style={{ flex: 1, display: hasPhotos?'none':null }}>
			            	<Text>Select Images</Text>
			            	<Button transparent onPress={this.showAlbum.bind(this)}>
											<Icon name='images' />
			            		<Text>Upload Images</Text>
										</Button>

			            </View>
	            	:
		            	<View style={{ flex: 1, display: hasPhotos? null :'none' }} onLayout={this._onLayoutDidChange}>
						        <Carousel
						        	autoplay={false}
						          style={{width:width, height:height/3}}
						          pageInfo
						        >
					            {this.state.photos.map((item, index) => (
						          	 <View key={index} style={[{ backgroundColor: '#BADA55' }, size]}>
						          	 <TouchableHighlight onPress={this.showAlbum.bind(this)}>
						          	 		<Image style={{width: width, height: height/3}} source={{uri:item.uri}}/>
						          	 	</TouchableHighlight>
					          	 	 </View>
									    ))}
						        </Carousel>
						      </View>
	            }

            </Row>
            <Row style={{ backgroundColor: '#E8E8E8',height: (2*height/3), width:width }}>
            	<Content>
	            <Form style={{flex:1}}>
	            	<Input placeholder="Title" />
	            	<Input placeholder="Tagline" />
		            <TextInput 
		            style={{height:(2*height/3)}}
	               placeholder = "Write a story ..."
	               autoFocus = {true}
	               multiline = {true}
	               maxLength = {1024}
	               placeholderTextColor = "#C8C8C8"
	               autoCapitalize = "none"/>
	            </Form>
            	</Content>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

