import dbConnect from '../../../Helpers/dbConnect'
import Product from '../../../Models/Product'

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { query, method } = req
  const { id } = query

  if (method === 'GET') {
    try {
      const productdata = await Product.findById(id)
      res.status(200).json(productdata)
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }

  if (method === 'DELETE') {
    try {
      const deleteproduct = await Product.deleteOne({ _id: id })

      if (!deleteproduct) throw Error('Failed to delete product')

      res.status(200).json({ message: 'Product deleted successfully' })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }

  if (method === 'PATCH') {
    try {
      const editproduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      })

      if (!editproduct) throw Error('Failed to edit product')

      res.status(200).json({ data: editproduct })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }
}
