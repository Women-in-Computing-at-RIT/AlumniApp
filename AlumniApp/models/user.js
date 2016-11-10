/**
 * file: user.js
 * Description: User class to specify a user.
 * Created by Cara on 11/10/2016.
 */

const Realm = require('realm');
// const Message = require('message');
// const RealmSync = require('kitesync');
class User {
    const UserSchema = {
        name: 'User',       // name of the schema
        properties: {
            username: String,
            password: String,
            email: String,
            // message: message,
            // profile: profile
        }
    };
}

User.schema = UserSchema;   

let realm = new Realm({schema: [UserSchema]});

// Instantiate KiteSync 

// const realmSync = RealmSync([UserSchema]);
// const realm = realmSync.getRealmInstance();


