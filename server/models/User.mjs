import { Schema, model } from 'mongoose';

const userSchema = Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
});

const Users = model('User', userSchema);

export default Users;