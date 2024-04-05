require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();

const connectDB = require('./dataLayer/index')

//connect Database
connectDB();

//Init Middleware
app.use(express.json({}));

//Removed for heroku installation
// app.get('/', (req, res) => res.send('API runnning'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
