/**
 * file: profile.js
 * Description: Profile class to specify a user profile.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
const WorkExperience = require('workExperience');
const JobPost = require('jobPost');
const Project = require('project');
// const RealmSync = require('kitesync');

// Realm Schema and setup
Profile.schema = {
    name: 'Profile',       // name of the schema
    properties: {
        firstName: String,
        lastName: String,
        photo: {type: 'data', optional: true},
        major: String,
        gradYear: Date,
        workExperience: WorkExperience,
        projects: {type: 'list', objectType: Project, optional: true},
        links: {type: 'list', objectType: String, optional: true},
        jobPosts: {type: 'list', objectType: JobPost, optional: true}
        // connections:
    }
};

const realm = new Realm({schema: [Profile]});

class Profile {

    // If the profile already exists then find it in the database
    // and put it in prof for access
    // Otherwise make it null
    constructor(id){
        if(id !=-1){
            this.state{prof: realm.objects('Profile').filtered(id)[0]}
        }
        else{
            this.state{prof: null}
        }
    }

    // Creates a new Profile in the relam database
    createProfile(fname, lname, photo, major,
        gradYear, workExperience, projects, links, JobPosts){
            
        }


}


// export const profile = Profile.schema;

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();
