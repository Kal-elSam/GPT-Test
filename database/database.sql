CREATE DATABASE ng_personas_db;

USE ng_personas_db;

CREATE TABLE personas (
    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    apellidoPaterno VARCHAR(40) NOT NULL,
    apellidoMaterno VARCHAR(40) NOT NULL,
    direccion TEXT,
    telefono VARCHAR(11),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE personas