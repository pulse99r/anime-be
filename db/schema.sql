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
