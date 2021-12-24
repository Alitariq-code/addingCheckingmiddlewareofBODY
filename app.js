const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const { dirname } = require('path');
const { nextTick } = require('process');
const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

// app.use((req, res, next) => {
//   console.log('we are staring working with midleware');
//   next();
// });
// app.use((req, res, next) => {
//   req.usermame = 'Ali tariq';
//   next();
// });
// app.use((req, res, next) => {
//   req.useraddress = 'lodhran';
//   next();
// });

// app.get('/', (req, res) => {
//   res.status(200).json({ name: 'ali', adress: 'lodhran' });
//   console.log(req);
// });
// app.post('/', (req, res) => {
//   res.send('ho gaya tera kam');
//   console.log('oye dali k bachay meray pass reqyest ayi hai teri');
// });

const Users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
);

// app.get('/api/tours', getAlltour);

// app.delete('/api/tours/:id', delTour);

// app.get('/api/tours/:id', getsingleTour);

// app.post('/api/tours', addTour);

// app.get('/api/Users', getAllUsers);

// app.delete('/api/Users/:id', delUser);

// app.get('/api/Users/:id', getsingleUser);

// app.post('/api/users', addUser);
// app.route('/api/tours').get(getAlltour).post(addTour);
// app.route('/api/tours/:id').get(getsingleUser).delete(delTour);

// app.route('/api/Users').get(getAllUsers).post(addUser);
// app.route('/api/Users/:id').get(getsingleUser).delete(delUser);

app.use('/api/Users', userRouter);
app.use('/api/tours', tourRouter);

module.exports = app;
