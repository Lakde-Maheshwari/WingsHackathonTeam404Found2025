const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
    });

    const chatSchema = new mongoose.Schema({
        participants: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }],
        messages: [messageSchema]
      });
      
      module.exports = mongoose.model('Chat', chatSchema);

