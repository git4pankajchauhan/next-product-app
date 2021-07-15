// import CreateProduct from 'components/Product/CreateProduct'
import { StyledButton } from 'components/Button/Button.style'
import React from 'react'

const Product = ({ product_items = [] }) => {
  return (
    <section className='data-table-section'>
      <div className='head-wrapper'>
        <h2 className='title'>Products</h2>
        <StyledButton color='secondry' outline rounded='100px' fontSize='1.2rem'>
          ADD PRODUCT
        </StyledButton>
        {/* <CreateProduct id='CREATE_PRODUCT' /> */}
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
          <tbody className='table-data'></tbody>
        </table>
      </div>
    </section>
  )
}

Product.AdminLayout = Product

export default Product
