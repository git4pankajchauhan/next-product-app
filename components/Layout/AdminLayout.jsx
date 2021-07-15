import React from 'react'
import { Category, ShoppingBasket } from '@material-ui/icons'
import Link from 'next/link'

const AdminLayout = ({ children }) => {
  return (
    <section className='admin-section'>
      <div className='container-lg'>
        <h4 className='page-title mb-5'>Admin Panel</h4>
        <div className='row side-menu-container'>
          <div className='col-12 col-md-3 mx-auto p-0'>
            <div className='side-menu-wrapper'>
              <Link href='/admin/product'>
                <a className='sm-link'>
                  <ShoppingBasket /> Product
                </a>
              </Link>
              <Link href='/admin/product-category'>
                <a className='sm-link'>
                  <Category /> Product Category
                </a>
              </Link>
            </div>
          </div>
          <div className='col-12 col-md-9 mx-auto content-wrapper'>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default AdminLayout
