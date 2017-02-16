/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, {Component} from 'react';
import{ AppRegistry, Text, TextInput, View} from 'react-native';

/**
 *Made Constructor and its properties
 */
class createAccount extends React.Component{
	constructor(props){
		super(props);
		
		this.state ={
			fullName: '';
			email:'';
			password: '';
			confirmPassword:'';
		}	
	}
}

/**
 *
 * Renders the fields
 * Have the User input Name, E-mail, Password, Confirm Password
 * Submit button changes state when it is pressed
 */
render(){
	return(
		<View>
			<TextInput
				placeholder="Name"
				onChangeText ={(text) => this.setState({Name: text})}
				value{(this.state.name)}
			/>
			<TextInput
				placeholder="E-mail"
				onChangeText ={(text)=>this.setState({email: text})}
				value{(this.state.email)}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={(text)=>this.setState({password: text})
				secureTextEntry={true}
			/>
			<TextInput
				placeholder="Confirm Password"
				onChangeText={(text)=>this.setState({confirmPassword: text})
				secureTextEntry={true}
			/>
			<Button onPress={onPressButton}
			title = "Submit"
			accessibilityLabel="Creating Account"
		/>
		</View>
	);
};