import config, { nodeEnv } from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.listen(config.port, () => {
    console.log('the server is listening on port:' + config.port);
});

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: "This is an ejs page",
    });
});


// putting express static middleware using the 'use method'

server.use('/api', apiRouter); // used for api references
server.use(express.static('public')); // used for static html requests