/**
 * file: profile.js
 * Description: Profile class to specify a user profile.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
// const RealmSync = require('kitesync');


class Event {}
Event.schema = {
    name: 'Event',       // name of the schema
    properties: {
        eventTitle: String,
        date: Date,
        time: Date,
        eventDescription: Text
    }
};

const realm = new Realm({schema: [Event]});

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


