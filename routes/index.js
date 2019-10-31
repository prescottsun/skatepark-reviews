const express = require('express'),
  router = express.Router(),
  ParkDataModel = require('../models/parkModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const parkList = await ParkDataModel.getParkData();
  res.render('template', {
    locals: {
      title: 'Index page',
      parkData: parkList,
      isLoggedIn: req.session.is_logged_in,
      userName: req.session.first_name
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.get('/:park_id', async (req, res, next) => {
  const { park_id } = req.params;
  const thePark = await ParkDataModel.getById(park_id);
  // const thePark = await ParkDataModel.getById(req.params.park_id);

  
  res.render('template', {
    locals: {
      title: 'This is one park',
      parkData: thePark,
      isLoggedIn: req.session.is_logged_in
    },
    partials: {
      partial: 'partial-single-park'
    }
  });
});

module.exports = router;
