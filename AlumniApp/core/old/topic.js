/**
 * file: topic.js
 * Description: Topic class to create a topic
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
const Post = require('./post');
// const RealmSync = require('kitesync');


class Topic {}
Topic.schema = {
    name: 'Topic',       // name of the schema
    properties: {
        name: String,
        description: String,
        posts: {type: list, objectType: 'Post'},
    }
};

const realm = new Realm({schema: [Topic]});
// export const message = Message.schema;

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


