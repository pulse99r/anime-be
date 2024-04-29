* Github Repos:
  * backend:  https://github.com/pulse99r/anime-be
  * frontend: 

4/29/2024
- We're creating a backend what will allow users to view animes
- we are not building a login feature
- However, we will be able to do CRUD operations with users, animes
- last time, we started by building the server, and we started to build the users table.
- In order to move along, I completed a second table called animes02 
- (see table definitions below)
- (see table data in the seed file under in db folder)

- we need to install CORS (cross origin resource sharing) - this is a node app that allows request from 
- nodemon allows the server to automatically restart when code in the repo is modified



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
);

DROP TABLE IF EXISTS animes02;
CREATE TABLE animes02 (
  id SERIAL PRIMARY KEY,
  char_img text,
  char_name text,
  char_desc, text,
  movie text,
  likes_id INT[], # an array of user id's 
  created_at TIMESTAMP 
);
