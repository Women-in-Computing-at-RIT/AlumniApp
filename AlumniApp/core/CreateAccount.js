/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, {Component} from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert} from 'react-native';
import zxcvbn from 'zxcvbn';

// const example
// const onPressButton = () => { Alert.alert('Button has been pressed!'); };

const PasswordInput = (props) => (
	<TextInput
		autoCapitalize='none'
		autoCorrect={false}
		secureTextEntry={true}
		{...props}
		/>
);

/**
 *Made Constructor and its properties
 */
export default class CreateAccount extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			email:'',
			password: ''
		};
		
		this.onPasswordVerification = this.onPasswordVerification.bind(this);
		this.onPasswordConfirm = this.onPasswordConfirm.bind(this);
	}

	// TODO - fix to push the entered information to realm etc.
	onPressButton(){
		Alert.alert('Button has been pressed!');
	}
	
	onPasswordVerification(wordList, password) {
        const {score} = zxcvbn(password, [...(this.state.fullName.split(' ')), this.state.email]);
        const isValid = password.length >= 6 && score > 2;
        
		if(isValid) {
			// On Valid Password
            Alert.alert(`Password: ${password}, Score: ${score}, Word: ${wordList[score]}`);
            this.setState({password});
        } else {
			// On Invalid Password
			Alert.alert('Alert Message: ', 'Your password is not strong enough.')
		}
	}
	
	onPasswordConfirm(text) {
		if(this.state.password === text) {
			// On Matching Password
			Alert.alert(`${text} == ${this.state.password}, password matches!`);
		} else {
			// On Mismatch
			Alert.alert('Alert Message: ', 'Your password does not match.')
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
					onChangeText={(text) => this.setState({ fullName: text })}
					value{this.state.fullName}
					onChangeText ={(text) => this.setState({fullName: text})}
					value={(this.state.name)}
					maxLength={30}
				/>

				<TextInput
					placeholder="E-mail"
					onChangeText={(text) => this.setState({ email: text })}
					value{this.state.email}

					onChangeText={(text)=>this.setState({email: text})}
					value={(this.state.email)}
					maxLength={30}
				/>
				<Text>Please input a password at least 8 characters</Text>
				<Text>To help make the password stronger use special characters or numbers</Text>
				<PasswordInput
					placeholder="Enter Password"
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
					onChangeText={this.onPasswordVerification.bind(this, ['weak', 'okay', 'good', 'strong', 'stronger'])}
				/>
				<PasswordInput
					placeholder="Confirm Password"
					onChangeText={this.onPasswordConfirm}
					maxLength = {30}
				/>
				<Button onPress={this.onPressButton}
				title = "Submit"
				accessibilityLabel="Creating Account"/>
			</View>
		);
	};
}
