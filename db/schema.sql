CREATE DATABASE wines_db;

USE wines_db;


-- Table Creation
CREATE TABLE wines
(
id INTEGER NOT NULL AUTO_INCREMENT,
wine_name VARCHAR(50) NOT NULL,
drank BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY (id)
);