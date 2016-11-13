/**
 * file: workExperience.js
 * Description: Work experience class to describe a user's work experience.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
// const RealmSync = require('kitesync');


class JobPost {}
JobPost.schema = {
    name: 'JobPost',       // name of the schema
    properties: {
        companyName: String,
        location: String,
        jobTitle: String,
        jobDescription: Text,
        requirements: {type: 'list', objectType: String}
    }
};

const realm = new Realm({schema: [JobPost]});

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


