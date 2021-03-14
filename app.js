
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/iconsDB", {useNewUrlParser: true, useUnifiedTopology: true});


// //PRODUCTS DATABASE
// const productsSchema = new mongoose.Schema ({
//   id: Number,
//   name: String,
//   colour: String,
//   pack: String,
//   price: Number
// });

// const Product = mongoose.model("Product", productsSchema);

// const product = new Product ({
//   id: 101,
//   name: "Fill",
//   colour: "Pearl White",
//   pack: "Everything",
//   price: 7.49
// });
// //product.save();

// Product.find(function(err, products){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(products);
//   }
// });



// //CUSTOMERS DATABASE
// const customersSchema = new mongoose.Schema ({
//   id: Number,
//   firstName: {
//     type: String, 
//     required: [true, "Please enter your First Name in the required feild"]
//   },
//   lastName: {
//     type: String, 
//     required: [true, "Please enter your Last Name in the required feild"]
//   },
//   email: {
//     type: String, 
//     required: [true, "Please enter your Email in the required feild"]
//   },
// });

// const Customer = mongoose.model("Customer", customersSchema);

// const customer = new Customer ({
//   id: 1,
//   firstName: "Hadi",
//   lastName: "Pirmohamed",
//   email: "hadi@pirmohamed.com"
// });
// //customer.save();

// Customer.find(function(err, customers){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(customers);
//   }
// });
