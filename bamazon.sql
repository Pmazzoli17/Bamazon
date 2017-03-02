CREATE database Bamazon;

USE Bamazon;

CREATE TABLE Products(
ItemID INTEGER (100) AUTO_INCREMENT NOT NULL,
ProductName VARCHAR (30) NOT NULL,
DepartmentName VARCHAR (30) NOT NULL,
Price DECIMAL (10, 4) NOT NULL,
StockQuantity INTEGER (4) NOT NULL,
PRIMARY KEY (ItemID)
);  

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity)
VALUES (1, "Avocado", "Vegetables", 5.50, 70),
	   (2, "Apple", "Fruits", 10.25, 100),
	   (3, "Steak", "Meats", 49.99, 35),
	   (4, "Beans", "Canned Goods", 2.75, 80),
	   (5, "Bagels", "Baked Goods", 2.00, 125),
	   (6, "Wine", "Alcohol", 95.99, 100),
	   (7, "Chicken", "Meats", 12.25, 115),
	   (8, "Donuts", "Baked Goods", 6.50, 45),
	   (9, "Beer", "Alcohol", 50.5, 95),
	   (10, "Turkey", "Meats", 19.95, 25);
