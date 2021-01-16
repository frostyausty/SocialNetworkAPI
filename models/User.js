const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,            
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/]
        },
        //should be an array of _id values referencing the though model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        //should be an array of _id values referencing the user model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

const User = model('User', UserSchema);

//dont know if this is correct!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total) => total + 1, 0);
});

module.exports = User;