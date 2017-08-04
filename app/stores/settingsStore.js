import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
  apiKey: "AIzaSyDWgugtXHNWZyfa90NCcntCOSXPNy5uH8E",
  authDomain: "dinder-19bfb.firebaseapp.com",
  databaseURL: "https://dinder-19bfb.firebaseio.com",
  projectId: "dinder-19bfb",
  storageBucket: "dinder-19bfb.appspot.com",
  messagingSenderId: "722316915354"
}

export default class SettingsStore extends MobxFirebaseStore {
	constructor(props) {
    if (!firebase.apps.length) {
		  firebase.initializeApp(config)
    }
		super(firebase.database().ref())
	}
}
