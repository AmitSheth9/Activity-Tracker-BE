/*const pool = require('../lib/utils/pool');
const usersData = require('./users');
const activities = require('./activities');

run();

async function run() {
  try {
    await pool.connect();

    await Promise.all(
      usersData.map(person => {
        return pool.query(`
                INSERT INTO usersx (, hash)
                VALUES ($1, $2)
                RETURNING *;
                `,

        [person.user, person.hash]);
      })
    );

    await Promise.all(activities.map(act => {
      return pool.query(`
            INSERT INTO activities (activity)
            VALUES ($1);
            `,
      [act.activity]);
    })
    );
    console.log('seed data load complete');
  } catch(err) {
    console.log(err);
  }
  finally {
    pool.end();
  }
    
}
*/
