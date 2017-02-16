/**
 * file: message.js
 * Description: Message class to create a message.
 * Created by Cara on 11/13/2016.
 */

const Realm = require('realm');
// const RealmSync = require('kitesync');


class Message {}
Message.schema = {
    name: 'Message',       // name of the schema
    properties: {
        sendTo: {type: 'int'},
        sentFrom: {type: 'int'},
        messageText: {type: 'string'}
    }
};

const realm = new Realm({schema: [Message]});
// export const message = Message.schema;

// Instantiate KiteSync

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();
