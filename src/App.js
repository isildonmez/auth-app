import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyB794FG47yTtVjgxo781ve0uZD1sl9-5W0',
		    authDomain: 'auth-e9677.firebaseapp.com',
		    databaseURL: 'https://auth-e9677.firebaseio.com',
		    projectId: 'auth-e9677',
		    storageBucket: 'auth-e9677.appspot.com',
		    messagingSenderId: '1098326211678'
		});
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An app</Text>
			</View>
		)
	}
}

export default App;
