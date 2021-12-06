const { Router } = require('express');
//const pool = require('../utils/pool');
const AddActivity = require('../models/add-activitiy');


module.exports = Router()
  .post('/', async(req, res, next) => {
    try{
      const activityObj = req.body;
      console.log(activityObj);
      const response = await AddActivity.insertActivity(activityObj);
      console.log(response);
      res.send(response);
    } catch (err) {
      next(err);
    }
  });
