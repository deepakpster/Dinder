import React, { Component } from 'react'
import {
  Content, 
  Container,
  View,
  Text,
  Button,
  Spinner
} from 'native-base'
import {Image, StyleSheet, Dimensions} from 'react-native'
import Dashboard from './../components/Dashboard'
// import SettingsStore from './../stores/settingsStore'
// import AuthStore from './../stores/authStore'
import {observer} from 'mobx-react/native'

// const settings = new SettingsStore()
// const authStore = new AuthStore()

@observer
export default class DashboardScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title,
    headerLeft: null,
    headerRight: navigation.state.params.headerRight,
  })
	constructor(props) {
		super(props)
  }

  componentWillMount(){
    const {navigation} = this.props
    const {auth, settings} = navigation.state.params
		this.state = {
			DashboardBG: require('./../../images/DashboardBG.jpg'),
      store: {
        settings: settings,
        auth: auth
      }
    }
  }

	render() {
    const {store} = this.state;
    const user = store.auth.getUser()
    console.log("Dashboard Store", store);
		return (
      <Image style={style.dashBackground} source={this.state.DashboardBG}>
          <Dashboard store={store} {...this.props}/>
      </Image>
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
  dashBackground: {
    flex:1,
    width: null,
    height: null
  }
})
