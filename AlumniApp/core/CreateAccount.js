/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, {Component} from 'react';
import{ AppRegistry, Text, TextInput, View, Button, Alert} from 'react-native';

// const example
// const onPressButton = () => { Alert.alert('Button has been pressed!'); };

/**
 *Made Constructor and its properties
 */
export default class CreateAccount extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			fullName: '',
			email:'',
			password: '',
			confirmPassword:''
		}
	}

	// TODO - fix to push the entered information to realm etc.
	onPressButton(){
		Alert.alert('Button has been pressed!');
	}

	// Have the User input Name, E-mail, Password, Confirm Password
	// Submit button changes state when it is pressed
	render(){
		return(
			<View>
				<TextInput
					placeholder="Name"
					onChangeText ={(text) => this.setState({fullName: text})}
					value={this.state.fullName}
				/>
				<TextInput
					placeholder="E-mail"
					onChangeText ={(text)=>this.setState({email: text})}
					value={this.state.email}
				/>
				<TextInput
					placeholder="Password"
					onChangeText={(text)=>this.setState({password: text})}
					secureTextEntry={true}
				/>
				<TextInput
					placeholder="Confirm Password"
					onChangeText={(text)=>this.setState({confirmPassword: text})}
					secureTextEntry={true}
				/>
				<Button onPress={this.onPressButton.bind(this)}
				title = "Submit"
				accessibilityLabel="Creating Account"
				/>
			</View>
		);
	}
}
