/**
 * file: workExperience.js
 * Description: Work experience class to describe a user's work experience.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');

// Schema for realm
WorkExperience.schema = {
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

const realm = new Realm({schema: [WorkExperience]});

class WorkExperience {
    
}

// export const workExperience = WorkExperience.schema;



// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();
