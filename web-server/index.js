import express from 'express';
import http from 'http';
import bodyParcer from 'body-parser';
import morgan from 'morgan';
import router from './router';
import mongoose from 'mongoose';

// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/auth')

const app = express();

// App Setup
app.use( morgan('combined') );
app.use( bodyParcer.json({type: '*/*'}) );

router(app);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port '+port);
