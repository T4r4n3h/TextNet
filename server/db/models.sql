CREATE TABLE snippets  (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(500) NOT NULL
);

CREATE TABLE words (
    id BIGSERIAL NOT NULL,
    word VARCHAR(50) NOT NULL PRIMARY KEY,
    lables_id BIGINT NOT NULL REFERENCES lables(id)
);

CREATE TABLE lables (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    color  CHAR(50),
    category VARCHAR(50)
);