const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pyi8sd9.mongodb.net/${process.env.DB_NAME}`;
const connectDB = async () => {
    try {
       await mongoose.connect(uri);
       console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
