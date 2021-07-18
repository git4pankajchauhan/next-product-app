import { StyledButton } from 'components/Button/Button.style'
import AddProduct from 'components/Product/AddProduct'
import ProductTableRow from 'components/Product/ProductTableRow'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from 'redux/actions/drawer.action'

const productsItems = (products = []) => {
  if (Object.keys(products).length === 0) {
    return (
      <tr>
        <td colSpan='5'>Empty Data</td>
      </tr>
    )
  }
  return products.map((items, index) => <ProductTableRow key={items._id} srno={index + 1} products={items} />)
}

const Product = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.product.products)

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <section className='data-table-section'>
      <div className='head-wrapper'>
        <h2 className='title'>Products</h2>
        <StyledButton onClick={() => dispatch(openDrawer('ADD_PRODUCT_ID'))} color='secondry' outline rounded='100px' fontSize='1.2rem'>
          ADD PRODUCT
        </StyledButton>
        <AddProduct id='ADD_PRODUCT_ID' />
      </div>
      <div className='table-wrapper'>
        <table className='table table-borderless'>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Available In</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='table-data'>{productsItems(products)}</tbody>
        </table>
      </div>
    </section>
  )
}
Product.AdminLayout = Product

export default Product
