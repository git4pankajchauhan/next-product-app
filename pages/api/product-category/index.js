import dbConnect from '../../../Helpers/dbConnect'
import ProductCategory from '../../../Models/ProductCategory'

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    try {
      const categorydata = await ProductCategory.find()
      res.status(200).json(categorydata)
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
    return
  }

  if (method === 'POST') {
    try {
      const categorydata = new ProductCategory(req.body)
      const savecategory = await categorydata.save()

      if (!savecategory) throw Error('Failed to add new product category')

      res.status(201).json({ message: 'Product category added successfully' })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }
}
