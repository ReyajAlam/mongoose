import mongoose from  'mongoose'
 const orderSchema = new mongoose.Schema({

 },{timestamps: true})

export  const order = mongoose.models('order',orderSchema)