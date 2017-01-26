/**
 * file: calendar.js
 * Description: Profile class to specify a user profile.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
const Event = require('./event');
// const RealmSync = require('kitesync');


class Calendar {}
Calendar.schema = {
    name: 'Calendar',       // name of the schema
    properties: {
        event: {type: list, objectType: 'Event'},
    }
};

const realm = new Realm({schema: [Event]});

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


