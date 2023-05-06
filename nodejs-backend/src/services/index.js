const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const inventories = require("./inventories/inventories.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(inventories);
  // ~cb-add-configure-service-name~
};
