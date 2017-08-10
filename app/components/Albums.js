import React from 'react'

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Button,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'

import RNFetchBlob from 'react-native-fetch-blob'

let styles
const { width, height } = Dimensions.get('window')

export default class Albums extends React.Component {
  state = {
    modalVisible: false,
    photos: [],
    selectedPhoto: null,
    index: 0
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = 0
    }
    this.setState({ index })
    const imageData = this.state.photos[index].node.image
    const imgUrl = imageData.uri
  	this.setState({ selectedPhoto: imgUrl })
  }

  uploadPhoto() {
  	const {index} = this.state
  	const {auth} =this.props.store
    const {firebase} = auth
    const imageData = this.state.photos[index].node.image
  	const storageRef = firebase.storage().ref(auth.getUser().uid+ '/storyPics/' + imageData.filename)
  	RNFetchBlob.fs.readFile(imgUrl, 'base64')
    .then((data) => {
    	const message = `data:image/jpg;base64,${data}`
	  	return storageRef.putString(message, 'data_url').then(function(snapshot) {
			  console.log('Uploaded a data_url string!');
			});
    });
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => {
    	console.log('test');
    	this.setState({ photos: r.edges, selectedPhoto: r.edges[0].node.image.uri })
    })
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  componentDidMount(){
  	this.getPhotos();
  }

  render() {
    console.log('state :', this.state)
    return (
      <View style={styles.container}>
      	{this.state.selectedPhoto ? 
      		<Image
                        style={{
                          width: width,
                          height: (height-250)
                        }}
                        source={{uri: this.state.selectedPhoto}}
                      /> : null
      	}
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.9 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width/3,
                          height: width/3
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
          </View>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})