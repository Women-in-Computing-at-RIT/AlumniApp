/**
 * Realm database management for accessing and creating the database
 */

const Realm = require('realm');

/////////////////////////////////////////////////////
// ALL OF THE SCHEMA SETUP
const MessageSchema = {
    name: 'Message',       // name of the schema
    properties: {
        sendTo: {type: 'int'},
        sentFrom: {type: 'int'},
        messageText: {type: 'string'}
    }
};

const InboxSchema = {
    name: 'Inbox',       // name of the schema
    properties: {
        people: {type: 'list', objectType:'int'},
        messages: {type: 'list', objectType: 'Message'}
    }
};

const UserSchema = {
    name: 'User',       // name of the schema
    properties: {
        id: {type: 'int'},
        username: {type: 'string'},
        password: {type: 'string'},
        email: {type: 'string'},
        inbox: {objectType: 'Inbox', optional: true},
        profile: {objectType: 'Profile', optional: true}
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
        workExperience: {objectType: 'WorkExperience', optional: true},
        projects: {type: 'List', objectType: 'Project', optional: true},
        links: {type: 'List', objectType: String, optional: true},
        jobPosts: {type: 'List', objectType: 'JobPost', optional: true}
        // connections:
    }
};

const EventSchema = {
    name: 'Event',       // name of the schema
    properties: {
        eventTitle: String,
        date: Date,
        time: Date,
        eventDescription: String
    }
};

const CalendarSchema = {
    name: 'Calendar',       // name of the schema
    properties: {
        events: {type: 'List', objectType: 'Event'},
    }
};

const WorkExperienceSchema = {
    name: 'WorkExperience',       // name of the schema
    properties: {
        companyName: String,
        location: String,
        jobTitle: String,
        jobDescription: String,
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
        jobDescription: String,
        requirements: {type: 'List', objectType: String}
    }
};

/////////////////////////////////////////////////////////////////
// CLASS WITH METHODS

export default class Database{

    /**
     * Sets up the database with the schema (in a relational database this would be tables)
     * Call this function first always
     */
    createDatabase(){
        const realm = new Realm({schema: [MessageSchema, InboxSchema, JobPostSchema,
            ProjectSchema, WorkExperienceSchema, EventSchema, CalendarSchema,
            ProfileSchema, UserSchema]});
    }

    /**
     * Adds an object to the database.
     * Expects jObj to be a JSON object formatted to have 2 attributes:
     *      1: name - String of the name of the Object to add
     *      2: properties - another JSON object with the properties of the thing
     *          you want to enter into the database.
     * Example of JSON object:
     * {"name":"User",
        "properties": {
             "id":1,
             "username": "blah",
             "password": "secret",
             "email": "abc1234@rit.edu"
         }
       }
     */
    add(jObj){
        realm.write(() => {
            realm.create(jObj.name, jObj.properties);
        });
    }

    /**
     * Adds multiple objects to the database
     * Same as the add() except the object to add is a JSON object
     * inside an array that is iterated through
     */
    addMultiple(objList){
        for(var i = 0; i<objList.length; i++){
            add(objList[i]);
        }
    }

    /**
     * Runs and update on an object
     */
    update(){

    }

    /**
     * Removes object from the database
     */
    remove(){

    }

    /**
     * Retrieving all objects from a database
     * className is a String of the name of the object you want to retrieve
     */
    query(className){
        return realm.objects(className);
    }


}
