const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Smile Dentist Server is running');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});