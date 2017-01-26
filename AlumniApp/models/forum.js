/**
 * file: forum.js
 * Description: Forum class to host a forum
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
const Topic = require('./topic')
// const RealmSync = require('kitesync');


class Forum {}
Forum.schema = {
    name: 'Forum',       // name of the schema
    properties: {
    topics: {type: list, objectType: 'Topic'},
    }
};

const realm = new Realm({schema: [Forum]});
// export const message = Message.schema;

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


