/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, { Component } from 'react';

import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';



/**
 *Made Constructor and its properties
 */
export default class CreateAccount extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	// TODO - fix to push the entered information to realm etc.
	onPressButton() {
		Alert.alert('Button has been pressed!');
	}


	/**
	 *
	 * Renders the fields
	 * Have the User input Name, E-mail, Password, Confirm Password
	 * Submit button changes state when it is pressed
	 */
	render() {
		return (
			<View>
				<TextInput
					placeholder="Name"
					onChangeText={(text) => this.setState({ fullName: text })}
					value{this.state.fullName}
					maxLength={30}
				/>

				<TextInput
					placeholder="E-mail"
					onChangeText={(text) => this.setState({ email: text })}
					value{this.state.email}
					maxLength={30}
				/>
				<TextInput
					placeholder="Password"
					onChangeText={(text) => this.setState({ password: text })
					secureTextEntry ={true}
					maxLength={30}
					<Text>Please input a password at least 8 characters</Text>
			<Text>To help make the password stronger use special characters or numbers</Text>



			< ReactPasswordStrength
				className="customStyling"
				style={{ display: 'none' }
				}
				minLength={8}
				minScore={2}
				scoreWords={['weak', 'okay', 'good', 'strong', 'excellent']}
				changeCallback={foo}
				inputProps={{ name: "password_input", autocomplete: "off" }}
			/>
		/>
			<TextInput
				placeholder="Confirm Password"
				onChangeText={(text) => this.setState({ confirmPassword: text })
						secureTextEntry={true}
				maxLength={30}
			/>
			<Button onPress={onPressButton}
				title="Submit"
				accessibilityLabel="Creating Account"
				if(Password.length < { 8}){
			alert("Password is not long enough!");
		}
		/>
			</View >
		);
	}


	// Have the User input Name, E-mail, Password, Confirm Password
	// Submit button changes state when it is pressed
	render() {
		return (
			<View>
				<TextInput
					placeholder="Name"
					onChangeText={(text) => this.setState({ fullName: text })}
					value={this.state.fullName}
				/>
				<TextInput
					placeholder="E-mail"
					onChangeText={(text) => this.setState({ email: text })}
					value={this.state.email}
				/>
				<TextInput
					placeholder="Password"
					onChangeText={(text) => this.setState({ password: text })}
					secureTextEntry={true}
				/>
				<TextInput
					placeholder="Confirm Password"
					onChangeText={(text) => this.setState({ confirmPassword: text })}
					secureTextEntry={true}
				/>
				<Button onPress={this.onPressButton.bind(this)}
					title="Submit"
					accessibilityLabel="Creating Account"
				/>
			</View>
		);
	}
}
