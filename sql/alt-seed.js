const pool = require('../lib/utils/pool');
const usersData = require('./users');
const activities = require('./activities');



module.exports = class SeedData {


  static async loadUser() {
    await pool.query('DELETE FROM usersx');
    await pool.query(`
                INSERT INTO usersx (person, hash)
                VALUES ($1, $2)
                RETURNING *;
                `,

    [usersData[0].user, usersData[0].hash]);
      
  }
  static async loadActivities() {
    await pool.query('DELETE FROM activities');
    for(let i = 0; i < activities.length; i++) {
      await pool.query (`
            INSERT INTO activities (activity)
            VALUES ($1);
            `,
      [activities[i].activity]);
    
    }
  }
  static async loadActivityData() {
    await pool.query('INSERT INTO activity_data (_name, activity_id, duration, hour, notes, day, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) Returning *', ['meditation', 12, 33, 1300, 'test', 990108, 6]);
    
  }
};
