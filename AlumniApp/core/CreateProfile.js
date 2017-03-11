/**
 * file: CreateEvent.js
 * Description: Creates Events
 * Created by David 03/11/2017
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

/**
 *Made Constructor and its properties
 */
export default class CreateProfile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		    name: '',
		    major: '',
		    graduationYear: moment(),
		    links:'',
		    jobTitle:'',
		    companyLocation:'',
		    dateWorkBegin: moment(),
		    dateWorkEnd: moment(),
		    jobDescription:'',
		    projectName:'',
		    projectDateBegin: moment(),
		    projectDateEnd: moment(),
		    projectDescription:'',
		}
	}

	render() {
            return (
                <View>
                    <TextInput
                        placeholder="Name"
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    />
                    <TextInput
                        placeholder="major"
                        onChangeText={(text) => this.setState({major: text})}
                        value={this.state.major}
                    <DatePicker
                        date={this.state.graduationYear}
                        mode="date"
                        placeholder="Graduation Year"
                        format="YYYY"
                        minDate={1829}
                        onDateChange={(date) => this.setState({ graduationYear: moment(date) })}
                    />
                    <TextInput
                        placeholder="Links"
                        onChangeText={(text) => this.setState({ links: text })}
                        value={this.state.lists}
                    />
                    <TextInput
                        placeholder="Job Title"
                        onChangeText={(text) => this.setState({ jobTitle: text })}
                        value={this.state.jobTitle}
                    />
                    <TextInput
                        placeholder="Company Location"
                        onChangeText={(text) => this.setState({ companyLocation: text })}
                        value={this.state.companyLocation}
                    />
                    <DatePicker
                        date={this.state.dateWorkBegin}
                        mode="date"
                        placeholder="From"
                        format="MMMM Do YYYY"
                        onDateChange={(date) => this.setState({dateWorkBegin : moment(date)})}
                    />
                    <DatePicker
                        date={this.state.dateWorkEnd}
                        mode="date"
                        placeholder="To"
                        format="MMMM Do YYYY"
                        onDateChange={(date) => this.setState({dateWorkEnd : moment(date)})}
                    />
                    <TextInput
                        placeholder="Job Description"
                        onChangeText={(text) => this.setState({jobDescription : text})}
                        value={this.state.jobDescription}
                    <TextInput
                        placeholder="Project Name"
                        onChangeText={(text) => this.setState({projectName : text})}
                        value={this.state.projectName}
                    />
                    <DatePicker
                        date={this.state.projectDateBegin}
                        mode="date"
                        plceholder="From"
                        format="MMMM Do YYYY"
                        onDateChange={(date) => this.setState({projectDateBegin : moment(date)})}
                    />
                    <DatePicker
                        date={this.state.dateWorkEnd}
                        mode="date"
                        placeholder="To"
                        format="MMMM Do YYYY"
                        onDateChange={(date) => this.setState({dateWorkEnd : moment(date)})}
                    />
                    <TextInput
                        placeholder="Project Description"
                        onChangeText={(text) => this.setState{(projectDescription : text)}}
                        value={this.state.projectDescription}
                    <Button onPress={this.onPressButton.bind(this)}
                        title="Create Profile"
                        accessibilityLabel="Creating Profile"
                    />
                </View>
            );
        }
    }
