/**
 * file: user.js
 * Description: User class to specify a user.
 * Created by Regina Locicero on 01/26/2017.
 */

const Realm = require('realm');
const Message = require('./message');

// const RealmSync = require('kitesync');


export default class Inbox {}
Inbox.Schema = {
    name: 'Inbox',       // name of the schema
    properties: {
        people: {type: list, objectType:'int'},
        messages: {type: list, objectType: 'Message'}
    }
};





// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();
