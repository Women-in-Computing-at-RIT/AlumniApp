/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, {Component} from 'react';
import{ AppRegistry, Text, TextInput, View, Alert} from 'react-native';

var alertMessage_1 = 'Password is not strong enough'
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
				maxLength = {30}
			/>
			
			<TextInput
				placeholder="E-mail"
				onChangeText ={(text)=>this.setState({email: text})}
				value{(this.state.email)}
				maxLength = {30}
			/>
			<TextInput
				<Text>Please input a password at least 8 characters</Text>
				<Text>To help make the password stronger use special characters or numbers</Text>
				placeholder="Password"
				onChangeText={(text)=>this.setState({password: text})
				secureTextEntry={true}
				maxLength = {30}
				<ReactPasswordStrength
					className="customStyling"
					style={{ display: 'none' }}
					minLength={8}
					minScore={2}
					scoreWords={['weak', 'okay', 'good', 'strong', 'excellent']}
					changeCallback={foo}
					inputProps={{ name: "password_input", autocomplete: "off" }}
				/>
			/>
			<TextInput
				placeholder="Confirm Password"
				onChangeText={(text)=>this.setState({confirmPassword: text})
				secureTextEntry={true}
				maxLength = {30}
			/>
			<Button onPress={onPressButton}
			title = "Submit"
			accessibilityLabel="Creating Account"
			if(Password.length < {8}){
				alert("Password is not long enough!");
			}
		/>
		</View>
	);
};