# :wine: Drink Da Wine!


### Overview
A Node, Express, Handlebars, and MySQL wine app that lets users input the names of wines they'd like to drink... 
Please check out the launched app on Heroku [here](#)!

### Prerequisites

This app requires a number of programs:
* [Node.js](https://nodejs.org/en/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* NPM Packages: 
	* [Express](https://www.npmjs.com/package/express)
	* [Express-Handlers](https://www.npmjs.com/package/express-handlebars)
	* [Body-Parser](https://www.npmjs.com/package/body-parser)
	* [MySQL](https://www.npmjs.com/package/mysql)
	* [dotenv](https://www.npmjs.com/package/dotenv)

### Functionality
Using an home-grown ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected wine by clicking "Drink It", which...
    * hits an `/wine/drink/:id` route in Express to change its "drank" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the drank column (via Handlebars)
  3. CREATE a new wine using the "Place Order" form, which...
    * hits a `/wine/create` route in Express to insert a new wine into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
