/**
 * file: CreateEvent.js
 * Description: Creates Events
 * Created by Abby on 02/23/17
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

/**
 *Made Constructor and its properties
 */
export default class CreateEvent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventName: '',
			eventDate: moment(),
			eventTime: moment(),
			eventLocation: '',
			eventDescription: ''

		}
	}

	// TODO - fix to push the entered information to realm etc.
	onPressButton() {
		Alert.alert('Created an Event!');
		Alert.alert(`${JSON.stringify(this.state)}`);
	}

	// Have the User input Event Name, Date, Time, Location, Description
	// Submit button changes state when it is pressed
	render() {
		return (
			<View>
				<TextInput
					placeholder="Event Name"
					onChangeText={(text) => this.setState({ eventName: text })}
					value={this.state.eventName}
				/>
				
				<Text>Choose Date and Time:</Text>
				<DatePicker
					style={{ width: 200 }}
					date={this.state.eventDate}
					mode="date"
					placeholder="Date"
					format="MMMM Do YYYY"
					minDate={moment()}
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					onDateChange={(date) => this.setState({ eventDate: moment(date) })}
				/>
				<DatePicker
					style={{ width: 200, marginTop: 10 }}
					date={this.state.eventTime}
					mode="time"
					placeholder="Time"
					format="h:mm a"
					minDate={moment()}
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					showIcon={false}
					onDateChange={(time) => this.setState({ eventTime: moment(time, "h:mm a")})}
				/>
				<TextInput
					placeholder="Location"
					onChangeText={(text) => this.setState({ eventLocation: text })}
					value={this.state.eventLocation}
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
