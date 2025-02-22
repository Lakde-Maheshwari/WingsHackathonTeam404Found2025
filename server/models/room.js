const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },

    participants: [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
         }],
         
}, { timestamps: true });

module.exports = mongoose.model('Room', RoomSchema);
