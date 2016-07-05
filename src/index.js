import express from 'express';
import path from 'path';
var router = express.Router();

import Greeter from './usersRouter';
import {gettable} from './db';

// call the sayHello function
// console.log(Greeter.sayHello);
// var greeting = new Greeter('Jeff')
// console.log(greeting.sayHello());

let app = express();
router.get('/users', function(req, res) {

    res.send('im the usersRouter' );
});
router.get('/:item', function(req, res) {
    console.log(gettable(req.params.item));
    res.send('im the ' +req.params.item);
});



// apply the routes to our application
app.use('/', router);// app.use('/users', usersRouter);
app.listen(3000);
