import { Schema, model } from 'mongoose';

const conversationSchema = new Schema({
    members: {
        type: Array,
        required: true
    }
});

const Conversation = model('Conversation', conversationSchema);

export default Conversation;