import { Schema, model } from 'mongoose';

const messageSchema = Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    message: {
        type: String
    }
});

const Messages = model('Message', messageSchema);

export default Messages;