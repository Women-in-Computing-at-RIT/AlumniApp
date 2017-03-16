/**
 * Realm database management for accessing and creating the database
 */

const Realm = require('realm');

const UserSchema = {
    name: 'User',       // name of the schema
    properties: {
        id: {type: 'int'},
        username: {type: 'string'},
        password: {type: 'string'},
        email: {type: 'string'},
        inbox: {objectType: Inbox, optional: true},
        profile: {objectType: Profile, optional: true}
    }
};

const ProfileSchema = {
    name: 'Profile',       // name of the schema
    properties: {
        firstName: String,
        lastName: String,
        photo: {type: 'data', optional: true},
        major: String,
        gradYear: Date,
        workExperience: {objectType: WorkExperience, optional: true},
        projects: {type: 'list', objectType: Project, optional: true},
        links: {type: 'list', objectType: String, optional: true},
        jobPosts: {type: 'list', objectType: JobPost, optional: true}
        // connections:
    }
};

const EventSchema = {
    name: 'Event',       // name of the schema
    properties: {
        eventTitle: String,
        date: Date,
        time: Date,
        eventDescription: Text
    }
};

const CalendarSchema = {
    name: 'Calendar',       // name of the schema
    properties: {
};

const WorkExperienceSchema = {
    name: 'WorkExperience',       // name of the schema
    properties: {
        companyName: String,
        location: String,
        jobTitle: String,
        jobDescription: Text,
        startDate: Date,
        endDate: {type: String, optional: true}
    }
};

const ProjectSchema = {
    name: 'Project',       // name of the schema
    properties: {
        projectName: String,
        projectDescription: String
    }
};

const JobPostSchema = {
    name: 'JobPost',       // name of the schema
    properties: {
        companyName: String,
        location: String,
        jobTitle: String,
        jobDescription: Text,
        requirements: {type: 'list', objectType: String}
    }
};

const InboxSchema = {
    name: 'Inbox',       // name of the schema
    properties: {
        people: {type: list, objectType:'int'},
        messages: {type: list, objectType: 'Message'}
    }
};

const MessageSchema = {
    name: 'Message',       // name of the schema
    properties: {
        sendTo: {type: 'int'},
        sentFrom: {type: 'int'},
        messageText: {type: 'string'}
    }
};

export default class realmdb{

    createDatabase(){
        const realm = new Realm({schema: [MessageSchema, InboxSchema, JobPostSchema,
            ProjectSchema, WorkExperienceSchema, EventSchema, CalendarSchema,
            ProfileSchema, UserSchema]});
    }
}
