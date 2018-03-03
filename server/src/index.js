const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const config = require('./config');

const app = express();

app.use(morgan('combined'));
app.use(json());
app.use(cors());

app.use(require('./routes/posts'));

mongoose.connect(config.dbURL)

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(process.env.PORT || 8081,
            () => console.log(`Server start on port ${process.env.PORT || 8081}`))
    })
    .on('error', error => console.warn(error))

// app.listen(process.env.PORT || 8081, err => {
//     console.log(`server is running on port ${process.env.PORT || 8081}`);
// })