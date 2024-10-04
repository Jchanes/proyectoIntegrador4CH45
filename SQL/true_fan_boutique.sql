-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_first_name` VARCHAR(100) NOT NULL,
  `user_last_name` VARCHAR(100) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_phone` INT NOT NULL,
  `user_email` VARCHAR(320) NOT NULL,
  `user_join_date` DATETIME NOT NULL,
  `user_address` VARCHAR(255) NULL,
  PRIMARY KEY (`user_id`, `user_password`),
  UNIQUE INDEX `usser_email_UNIQUE` (`user_email` ASC) VISIBLE,
  UNIQUE INDEX `usser_phone_UNIQUE` (`user_phone` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Order` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `order_date` DATETIME NOT NULL,
  `order_status` BINARY NOT NULL,
  `order_item_list` SET('items') NULL,
  `User_user_id` INT NOT NULL,
  `User_user_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`order_id`, `User_user_id`, `User_user_password`),
  INDEX `fk_Order_User1_idx` (`User_user_id` ASC, `User_user_password` ASC) VISIBLE,
  CONSTRAINT `fk_Order_User1`
    FOREIGN KEY (`User_user_id` , `User_user_password`)
    REFERENCES `mydb`.`User` (`user_id` , `user_password`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `product_description` TINYTEXT NOT NULL,
  `product_price` DECIMAL NOT NULL,
  `product_genre` ENUM("ROCK", "EDM", "INDIE", "POP", "RAP", "REGIONAL", "URBAN") NOT NULL,
  `product_image` VARCHAR(45) NOT NULL,
  `product_stock` INT NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Product_has_Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Product_has_Order` (
  `Product_product_id` INT NOT NULL,
  `Order_order_id` INT NOT NULL,
  PRIMARY KEY (`Product_product_id`, `Order_order_id`),
  INDEX `fk_Product_has_Order_Order1_idx` (`Order_order_id` ASC) VISIBLE,
  INDEX `fk_Product_has_Order_Product_idx` (`Product_product_id` ASC) VISIBLE,
  CONSTRAINT `fk_Product_has_Order_Product`
    FOREIGN KEY (`Product_product_id`)
    REFERENCES `mydb`.`Product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_has_Order_Order1`
    FOREIGN KEY (`Order_order_id`)
    REFERENCES `mydb`.`Order` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
