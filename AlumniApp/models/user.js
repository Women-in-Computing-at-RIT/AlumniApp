/**
 * file: user.js
 * Description: User class to specify a user.
 * Created by Cara on 11/10/2016.
 */

const Realm = require('realm');
const Message = require('./message');
const Profile = require('./profile');

// const RealmSync = require('kitesync');


export default class User {}
User.Schema = {
    name: 'User',       // name of the schema
    properties: {
        username: {type: 'string'},
        password: {type: 'string'},
        email: {type: 'string'},
        message: {objectType: Message, optional: true},
        profile: {objectType: Profile, optional: true}
    }
};



// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


