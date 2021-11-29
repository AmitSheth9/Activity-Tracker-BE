


CREATE TABLE test (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    something VARCHAR(512)


CREATE TABLE trackdata (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    _name VARCHAR(512) NOT NULL,
    activity_id INTEGER,
    duration INTEGER,
    hour VARCHAR(512),
    notes VARCHAR(512),
    day INTEGER,
    useperson INTEGER
);


/*
CREATE TABLE usersx (
    id SERIAL PRIMARY KEY,
    person VARCHAR(512),
    hash VARCHAR(512)
); 

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    activity VARCHAR(512) NOT NULL
);          
   */             
