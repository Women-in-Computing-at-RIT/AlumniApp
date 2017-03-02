/**
 * file: CreateJobPost.js
 * Description: Creates Job Posts
 * Created by Abby on 03/02/17
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'

/**
 *Made Constructor and its properties
 */
export default class CreateJobPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobName: '',
            startDate: '',
            endDate: '',
            jobLocation: '',
            jobDescription: ''

        }
    }

    // TODO - fix to push the entered information to realm etc.
    onPressButton() {
        Alert.alert('Created an Job Post!');
    }

    // Have the User input Event Name, Date, Time, Location, Description
    // Submit button changes state when it is pressed
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Job Name"
                    onChangeText={(text) => this.setState({ jobName: text })}
                    value={this.state.jobName}
                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="Start Date"
                    format="YYYY-MM-DD"
                    minDate="2017-02-23"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({ startDate: date })}
                    value={this.state.startDate}
                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="End Date"
                    format="YYYY-MM-DD"
                    minDate="2017-02-23"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({ endDate: date })}
                    value={this.state.endDate}
                />

                <TextInput
                    placeholder="Job Location"
                    onChangeText={(text) => this.setState({ jobLocation: text })}
                    value={this.state.jobLocation}
                />
                <TextInput
                    placeholder="Job Description"
                    onChangeText={(text) => this.setState({ jobDescription: text })}
                    value={this.state.jobDescription}
                />
                <Button onPress={this.onPressButton.bind(this)}
                    title="Post"
                    accessibilityLabel="Creating Job Post"
                />
            </View>
        );
    }
}
