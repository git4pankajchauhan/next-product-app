import React from 'react'

const ProductTableRow = props => {
  const { _id, name, price, description, image, available_in } = props.products
  return (
    <tr>
      <td>{props.srno}</td>
      <td>
        <img src={image} alt={name} width='70' />
      </td>
      <td className='text-wrap'>{name}</td>
      <td className='text-wrap'>{description}</td>
      <td>{price}</td>
      <td>{available_in.join(', ')}</td>
    </tr>
  )
}

export default ProductTableRow
