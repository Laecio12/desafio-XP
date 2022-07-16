DROP DATABASE
  IF EXISTS desafio_xp;

CREATE DATABASE
  desafio_xp;

USE
  desafio_xp;

CREATE TABLE
  users (
    id VARCHAR(36) NOT NULL,
    name VARCHAR(70) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  investments (
    symbol VARCHAR(7) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL,
    quatity INT NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(symbol)
  ) ENGINE = INNODB;

CREATE TABLE
  account (
    account_number VARCHAR(8) NOT NULL UNIQUE,
    balance DECIMAL(10, 2) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(account_number)
  ) ENGINE = INNODB;

CREATE TABLE
  wallet (
    id VARCHAR(36) NOT NULL,
    investiment_symbol VARCHAR(7) NOT NULL UNIQUE,
    quantity INT NOT NULL,
    average_price DECIMAL(10, 2) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (investiment_symbol) REFERENCES investments (symbol) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;