/**
 * file: profile.js
 * Description: Profile class to specify a user profile.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
// const RealmSync = require('kitesync');


class Project {}
Project.schema = {
    name: 'Project',       // name of the schema
    properties: {
        projectName: String,
        projectDescription: String
    }
};

const realm = new Realm({schema: [Project]});

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


