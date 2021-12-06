const { Router } = require('express');
//const pool = require('../utils/pool');
const seed = require('../../sql/alt-seed');



module.exports = Router()
  .post('/', async(req, res, next) => {
    try{
      seed.loadUser();
      seed.loadActivities();
      seed.loadActivityData();
      res.send('success');
    } catch(err) {
      next(err);
    }

  });

