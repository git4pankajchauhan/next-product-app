import dbConnect from '../../../Helpers/dbConnect'
import ProductCategory from '../../../Models/ProductCategory'

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { query, method } = req
  const { id } = query

  if (method === 'GET') {
    try {
      const categorydata = await ProductCategory.findById(id)
      res.status(200).json(categorydata)
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }

  if (method === 'DELETE') {
    try {
      const deletecategory = await ProductCategory.deleteOne({ _id: id })

      if (!deletecategory) throw Error('Failed to delete product category')

      res.status(200).json({ message: 'Product category deleted successfully' })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }

  if (method === 'PATCH') {
    try {
      const editcategory = await ProductCategory.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      })

      if (!editcategory) throw Error('Failed to edit product category')

      res.status(200).json({ data: editcategory })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }
}
