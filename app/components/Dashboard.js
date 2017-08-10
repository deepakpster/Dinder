import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import AccountContent from './Account'
import AboutContent from './About'
import AlbumsContent from './Albums'
import StoriesContent from './Stories'
const DashboardScreen = require('./../screens/Dashboard')

export default class Dashboard extends Component {
	constructor(props) {
		super(props)
    const { navigate, setParams } = this.props.navigation;
		const btnCfg = [{
			name: "albums",
			text: "Albums",
			screen: <AlbumsContent {...this.props}/>,
			active: true
		},{
			name: "camera",
			text: "Camera",
			screen: <AccountContent {...this.props}/>,
			active:false
		},{
			name: "book",
			text: "Stories",
			screen: <StoriesContent {...this.props}/>,
			active: false
		},{
			name: "person",
			text: "Account",
			screen: <AccountContent {...this.props}/>,
			active: false
		}];
		this.state = {
			previous: btnCfg[0],
			btnConfig: btnCfg,
			screen: btnCfg[0].screen
		}
		setParams({title: btnCfg[0].text})
	}
	render(){
		return (
			<Container>
        <Content style={{flex:1}}>
        	{this.state.screen}
        </Content>
        <Footer>
          <FooterTab>
          	{this.getButtonComponent()}
          </FooterTab>
        </Footer>
      </Container>
		)
	}

	goToPage(btn){
		let {previous, btnConfig} = this.state
    const { navigate, setParams } = this.props.navigation;

		btnConfig = btnConfig.map((b) => {
			if(b.active) b.active = false
			if(b.name == btn.name) b.active = true
			return b;
		})
		this.setState({btnConfig})
		this.setState({
			screen: btn.screen
		})
		setParams({title: btn.text})
	}

	getButtonComponent(){
		const {btnConfig, active} = this.state
		const buttonList = btnConfig.map((btn) => 
			<Button key={btn.name} onPress={this.goToPage.bind(this, btn)} active={btn.active}>
				<Icon active={btn.active} name={btn.name} />
				<Text>{btn.text} </Text>
			</Button>
		);
		return buttonList
	}
}
