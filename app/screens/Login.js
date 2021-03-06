import React, { Component } from 'react'
import {
  Content, 
  Container,
  View,
  Spinner
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'
import Login from './../components/Login'
import SettingsStore from './../stores/settingsStore'
import AuthStore from './../stores/authStore'
import {observer} from 'mobx-react/native'

const settings = new SettingsStore()
const authStore = new AuthStore()

@observer
export default class LoginScreen extends Component {
	static navigationOptions = {
    title: 'Dinder',
    header: null
  };
	constructor(props) {
		super(props)
		this.state = {
			LoginBG: require('./../../images/LoginBG.jpg'),
      store: {
        settings: settings,
        auth: authStore
      }
    }
	}

	render() {
    let {store} = this.state;
		return (
			<Container style={style.container}>
				<Content scrollEnabled={false}>
					<Image style={style.loginBackground} source={this.state.LoginBG}>
						<View style={style.loginForeground}>
							<Login store={store} {...this.props}/>
						</View>
					</Image>
				</Content>
			</Container>
		)
	}
}

const style = StyleSheet.create({
	container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex:1,
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})
