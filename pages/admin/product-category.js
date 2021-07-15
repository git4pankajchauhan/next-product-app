// import { StyleButton } from 'components/Button/Button.style'
// import CreateProduct from 'components/Product/CreateProduct'
import React from 'react'

const ProductCategory = ({ product_items = [] }) => {
  return (
    // <section className='data-table-section'>
    //   <div className='head-wrapper'>
    //     <h2 className='title'>Products</h2>
    //     <StyleButton color='secondry' outline>
    //       ADD PRODUCT
    //     </StyleButton>
    //     <CreateProduct id='CREATE_PRODUCT' />
    //   </div>
    //   <div className='table-wrapper'>
    //     <table className='table table-borderless'>
    //       <thead>
    //         <tr>
    //           <th>#</th>
    //           <th>Image</th>
    //           <th>Name</th>
    //           <th>Description</th>
    //           <th>Available In</th>
    //           <th>Status</th>
    //         </tr>
    //       </thead>
    //       <tbody className='table-data'></tbody>
    //     </table>
    //   </div>
    // </section>
    <h1>Product Category</h1>
  )
}

ProductCategory.AdminLayout = ProductCategory

export default ProductCategory
