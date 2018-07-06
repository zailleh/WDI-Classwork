CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- URL for photo of a butterfly
);

-- seed data
INSERT INTO butterflies (name, family)
VALUES
  ('Monarch','Nymphalidae')