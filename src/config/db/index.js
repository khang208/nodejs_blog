const mongoose = require('mongoose');
async function connect() {
    try {
        mongoose
            .connect('mongodb+srv://khangnbce170268:FrzTpsEps0tykIZN@cluster0.jffch.mongodb.net/exe201')
            .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('fail!');
    }
}
module.exports = { connect };

// mongodb://localhost:27017/exe201