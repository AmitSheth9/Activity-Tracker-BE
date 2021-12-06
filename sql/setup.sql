
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS trackdata;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    person VARCHAR(512),
    hash VARCHAR(512)
); 

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    activity VARCHAR(512) NOT NULL
);          
CREATE TABLE trackdata (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    activity_name VARCHAR(512),
    activity_id INTEGER REFERENCES activities(id),
    duration INTEGER,
    hour timestamp,
    notes VARCHAR,
    date_ timestamp,
    owner_id INTEGER NOT NULL REFERENCES users(id) 
);




        
