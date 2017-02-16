/**
 * file: post.js
 * Description: Post class to create a post in the forum
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
// const RealmSync = require('kitesync');


class Post {}
Post.schema = {
    name: 'Post',       // name of the schema
    properties: {
        author: int,
        subject: String,
        text: String,
    }
};

const realm = new Realm({schema: [Post]});
// export const message = Message.schema;

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


