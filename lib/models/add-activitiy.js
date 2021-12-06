const pool = require('../utils/pool');


module.exports = class AddActivity {


  static async insertActivity(obj) {
    console.log(obj);
    await pool.query('INSERT INTO trackdata (activity_name, activity_id, duration, hour, notes, date_, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7) Returning *', [obj.name, obj.id, obj.duration, obj.time, obj.notes, obj.date, 1]);
    return obj;
  }
};
