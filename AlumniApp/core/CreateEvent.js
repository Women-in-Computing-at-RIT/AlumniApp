/**
 * file: CreateAccount.js
 * Description: Creates the Account of the User
 * Created by David on 02/16/17
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
// const example
// const onPressButton = () => { Alert.alert('Button has been pressed!'); };

/**
 *Made Constructor and its properties
 */
export default class CreateEvent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventName: '',
			eventDate: '2017-02-23',
			eventTime: '',
			eventLocation: '',
			eventDescription: ''

		}
	}

	// TODO - fix to push the entered information to realm etc.
	onPressButton() {
		Alert.alert('Created an Event!');
	}

	// Have the User input Name, E-mail, Password, Confirm Password
	// Submit button changes state when it is pressed
	render() {
		return (
			<View>
				<TextInput
					placeholder="Event Name"
					onChangeText={(text) => this.setState({ eventName: text })}
					value={this.state.eventName}
				/>
				<DatePicker
					style={{ width: 200 }}
					date={this.state.date}
					mode="date"
					placeholder="Date"
					format="YYYY-MM-DD"
					minDate="2017-02-23"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					onDateChange={(date) => this.setState({ eventDate: date })}
					value={this.state.eventDate}
				/>
				<TextInput
					placeholder="Time"
					onChangeText={(text) => this.setState({ eventTime: text })}
					value={this.state.eventTime}
				/>
				<TextInput
					placeholder="Location"
					onChangeText={(text) => this.setState({ eventLocation: text })}
					value={this.state.eventTime}
				/>
				<TextInput
					placeholder="Description"
					onChangeText={(text) => this.setState({ eventDescription: text })}
					value={this.state.eventDescription}
				/>
				<Button onPress={this.onPressButton.bind(this)}
					title="Create"
					accessibilityLabel="Creating Event"
				/>
			</View>
		);
	}
}
