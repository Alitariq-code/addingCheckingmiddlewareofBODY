const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAlltour = (req, res) => {
  res.status(200).json({
    status: 'sucsses',
    results: tours.length,
    requestedby: req.usermame,
    adress: req.useraddress,
    data: {
      tours,
    },
  });
};
exports.getsingleTour = (req, res) => {
  console.log(req.params.id);
  const index = req.params.id;
  const newData = tours[index];
  if (newData) {
    res.status(200).json({
      status: 'sucsses',
      data: {
        tour: newData,
      },
    });
  } else {
    console.log('data nahi mull raa');
    res.status(404).send('daata ahi hai bhai');
  }
};

exports.delTour = (req, res) => {
  res.status(204).json({
    sucsses: 'sucsses',
    data: 'ad',
  });
};

// Checking request body here
exports.Checkbody = (req, res, next) => {
  if (!req.body.name) {
    return res.json({
      masg: 'add data first',
    });
  }
  next();
};

exports.addTour = (req, res) => {
  const id = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: id }, req.body);
  tours.push(newtour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        sucsses: 'sucesss',
        data: {
          tour: newtour,
        },
      });
      console.log(req.body);
    }
  );
};
