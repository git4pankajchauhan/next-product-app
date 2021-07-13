import dbConnect from '../../../Helpers/dbConnect'
import Product from '../../../Models/Product'

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    try {
      const productdata = await Product.find()
      res.status(200).json(productdata)
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
    return
  }

  if (method === 'POST') {
    try {
      const productdata = new Product(req.body)
      const saveproduct = await productdata.save()

      if (!saveproduct) throw Error('Failed to add new product')

      res.status(201).json({ message: 'Product added successfully' })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }
}
