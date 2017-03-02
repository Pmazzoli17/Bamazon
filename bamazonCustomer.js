/// requiring the npm mysql, prompt and console.table in our file
var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

// Creates the properties so that we can connect our server.js file to the mysql database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon'
});

//Initiates the connection
connection.connect(function(err){
	if (err) throw err;
	console.log("connection successful!");
});

function startShopping(){
	connection.query("SELECT * FROM Products", function(err, Products){
		console.table(Products);
		inquirer.prompt({
			name: "items",
			type: "input",
			message: "What is the id of the product you would like to purchase?"
		}).then(function(product){
			for (var i = 0; i < Products.length; i++){
				if (Products[i].ItemID == product.items){
					var selectedProduct = Products[i];
					inquirer.prompt({
						name: "quantity",
						type: "input",
						message: "How many would you like to buy?"

					}).then(function(stock){  
						if (selectedProduct.StockQuantity < parseInt(stock.quantity)){
							console.log("Insufficient quantity!");
							startShopping();
						}
						else{
							var totalCost = parseFloat(selectedProduct.Price) * parseFloat(stock.quantity);
							var newQuantity = selectedProduct.StockQuantity - stock.quantity;

							connection.query("UPDATE Products SET ? WHERE ?", [{
								StockQuantity: newQuantity
							}, {
								ItemID: product.items
							}], function(err, res){
								console.log("Product Bought! Your total cost is $" + totalCost + ".");
								console.log("SALES ADDED TO DEPARTMENT!");
								startShopping();
							});
						}
					});
				}
			}
		});
	});
}
startShopping();