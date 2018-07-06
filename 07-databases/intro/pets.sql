CREATE TABLE pets (
  id INTEGER PRIMARY KEY,
  name TEXT,
  breed TEXT,
  age INTEGER,
  dead INTEGER --boolean: 0 = alive - 1 = dead;
)
;

-- seed data
INSERT INTO pets 
VALUES
  (1, 'Fluffy', 'unicorn', 1000, 0),
  (2, 'Gigantor', 'robot', 1, 1)
;