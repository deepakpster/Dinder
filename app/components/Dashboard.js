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
		const btnCfg = [{
		// 	name: "albums",
		// 	text: "Albums",
		// 	screen: <AlbumsContent {...this.props}/>,
		//  hidden: true,
		// 	active: true
		// },{
		// 	name: "camera",
		// 	text: "Camera",
		//  hidden: true,
		// 	screen: <AccountContent {...this.props}/>,
		// 	active:false
		// },{
			name: "book",
			text: "Stories",
			headerRight: <Button transparent bordered onPress={this.addStory.bind(this)}>
				<Icon name='add' />
			</Button>,
			screen: <StoriesContent {...this.props}/>,
			active: true
		},{
			name: "person",
			text: "Account",
			screen: <AccountContent {...this.props}/>,
			active: false
		}];
		this.state = {
			previous: null,
			btnConfig: btnCfg,
			screen: null
		}
	}
	componentDidMount(){
		let {btnConfig} = this.state
    this.goToPage(btnConfig[0])
	}
	addStory() {
		console.log("Add Story");
    const { navigate } = this.props.navigation;
    navigate('AddStory', {
    	headerRight: null,
    	props: this.props
    })
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
    const { setParams } = this.props.navigation;

		btnConfig = btnConfig.map((b) => {
			if(b.active) b.active = false
			if(b.name == btn.name) b.active = true
			return b;
		})
		this.setState({btnConfig})
		this.setState({
			screen: btn.screen
		})
		setParams({
			title: btn.text,
			headerRight: btn.headerRight
		})
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
