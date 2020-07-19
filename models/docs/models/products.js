const { Schema, model } = require('mongoose')

const productSchema = new Schema(
     {
          name : String,
          price : Number,
     },
     {timestamps : true,}
);
module.exports = model("product", productSchema)