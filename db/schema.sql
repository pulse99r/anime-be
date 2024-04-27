\c data_wharehouse_dev;

DROP TABLE IF EXISTS users02;
CREATE TABLE users02 (
  id SERIAL PRIMARY KEY,
  first_name text,
  last_name text,
  email VARCHAR(60),
  username TEXT,
  phone VARCHAR(12),
  created_at TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS animes02;
CREATE TABLE animes02 (
  id SERIAL PRIMARY KEY,
  char_img text,
  char_name text,
  char_desc text,
  movie text,
  likes_id INT[],
  created_at TIMESTAMP DEFAULT NOW()
);
