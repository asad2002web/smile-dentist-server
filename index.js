const express = require('express');
const connectDB = require('./config/connectDb');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3005;
const testRouter = require('./routes/testRouter');
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(testRouter);

app.get('/', (req, res) => {
    res.send('Smile Dentist Server is running');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   connectDB();
});