CREATE DATABASE mysqlnode;

use mysqlnode;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(300) NOT NULL,
    phone VARCHAR(10)
);