const pool = require('../utils/pool');


module.exports = class AddActivity {


  static async insertActivity(obj) {
    console.log(obj);
    await pool.query('INSERT INTO trackdata ( _name, activity_id, duration, hour, notes, day, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) Returning *', [obj.name, 12, obj.duration, 1300, obj.notes, obj.date, 6]);
    return obj;
  }
};
