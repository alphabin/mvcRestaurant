### Schema

CREATE DATABASE res_db;
USE res_db;

CREATE TABLE resTable
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

