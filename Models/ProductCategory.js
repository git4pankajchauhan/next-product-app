import mongoose from 'mongoose'

const ProductCategorySchema = new mongoose.Schema({
  name: String,
  active: { type: Boolean, default: true },
})

export default mongoose.models.productCategory || mongoose.model('productCategory', ProductCategorySchema)
