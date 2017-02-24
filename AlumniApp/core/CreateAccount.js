/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, {Component} from 'react';
<<<<<<< HEAD
import{ AppRegistry, Text, TextInput, View, Alert} from 'react-native';
=======
import{ AppRegistry, Text, TextInput, View, Button, Alert} from 'react-native';

// const example
// const onPressButton = () => { Alert.alert('Button has been pressed!'); };
>>>>>>> refs/remotes/Women-in-Computing-at-RIT/master

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
<<<<<<< HEAD

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
=======

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
>>>>>>> refs/remotes/Women-in-Computing-at-RIT/master
