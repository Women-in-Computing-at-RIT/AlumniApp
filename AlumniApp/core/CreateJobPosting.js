/**
 * file: CreateJobPost.js
 * Description: Creates Job Posts
 * Created by Abby on 03/02/17
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

/**
 *Made Constructor and its properties
 */
export default class CreateJobPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobName: '',
            startDate: moment(),
            endDate: moment(),
            jobLocation: '',
            jobDescription: ''

        }
    }

    // TODO - fix to push the entered information to realm etc.
    onPressButton() {
        Alert.alert('Created an Job Post!');
        Alert.alert(`${JSON.stringify(this.state)}`);
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
                    date={this.state.startDate.toDate()}
                    mode="date"
                    placeholder="Start Date"
                    format="MMMM Do YYYY"
                    minDate={moment().toDate()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({ startDate: moment(date) })}
                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.endDate.toDate()}
                    mode="date"
                    placeholder="End Date"
                    format="MMMM Do YYYY"
                    minDate={moment().toDate()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({ endDate: moment(date) })}
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
