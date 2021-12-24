const { response } = require('express');

const express = require('express');
const tourControl = require('./../controllers/tourControler');
const router = express.Router();

router
  .route('/')
  .get(tourControl.getAlltour)
  .post(tourControl.Checkbody, tourControl.addTour);
router.route('/:id').get(tourControl.getsingleTour).delete(tourControl.delTour);

module.exports = router;
