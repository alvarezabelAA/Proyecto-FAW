CREATE TABLE `proyecto`.`usuarios` (
  `usuarios` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `pass` VARCHAR(45) NULL,
  `fecha` VARCHAR(45) NULL,
  PRIMARY KEY (`usuarios`));

CREATE TABLE `proyecto`.`comics` (
  `comic` VARCHAR(100) NOT NULL,
  `year` DATE NULL,
  `sinopsis` VARCHAR(300) NULL,
  `editorial` VARCHAR(45) NULL,
  PRIMARY KEY (`comic`));