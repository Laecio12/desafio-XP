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
  accounts (
    account_number VARCHAR(8) NOT NULL UNIQUE,
    balance DECIMAL(10, 2) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(account_number)
  ) ENGINE = INNODB;

CREATE TABLE
  wallets (
	id VARCHAR(36) NOT NULL,
	user_id VARCHAR(36) NOT NULL,
    investment_symbol VARCHAR(7) NOT NULL,
    quantity INT NOT NULL,
    average_price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (investment_symbol) REFERENCES investments (symbol) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

  INSERT INTO investments (symbol, price, quatity) VALUES 
  ('XPBR31', 94.31, 200), 
  ('PETR4', 27.96, 100), 
  ('TAEE11', 39.60, 150), 
  ('MGLU3', 2.78, 250), 
  ('FLRY3', 16.35, 250), 
  ('XPLG11', 96.00, 250), 
  ('HGLG11', 163.54, 150), 
  ('KNRI11', 132.40, 150), 
  ('MXRF11', 9.68, 150), 
  ('ALZR11', 113.50, 150);