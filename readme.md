* Github Repos:
  * backend:  https://github.com/pulse99r/anime-be
  * frontend: 


Table definitions
DROP TABLE IF EXISTS users02;
CREATE TABLE users02 (
  id SERIAL PRIMARY KEY,
  first_name text,
  last_name text,
  email VARCHAR(60),
  username TEXT,
  phone VARCHAR(12),
  created_at TIMESTAMP 
)
DROP TABLE IF EXISTS animes02;
CREATE TABLE animes02 (
  id SERIAL PRIMARY KEY,
  char_img text,
  char_name text,
  char_desc, text,
  likes_id INT[], # an array of user id's 
  created_at TIMESTAMP 
)
