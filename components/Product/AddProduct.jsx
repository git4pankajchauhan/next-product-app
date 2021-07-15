import CustomDrawer from 'cmponents/Drawer/CustomDrawer'
import { StyledButton } from 'components/Button/Button.style'
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddProduct = props => {
  const [post, setPost] = useState({ title: '', subTitle: '', tags: '', description: '' })
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    console.log(post)
  }

  const onChange = e => {
    const { name, value } = e.target
    setPost(lastInput => ({
      ...lastInput,
      [name]: value,
    }))
  }

  return (
    <CustomDrawer headTitle='Add New Product' id={props.id}>
      <form onSubmit={onSubmit}>
        <CustomInput type='text' name='title' onChange={onChange} placeholder='Enter Title' />
        <CustomInput type='text' name='subTitle' onChange={onChange} placeholder='Enter Sub Title' />
        <CustomInput type='text' name='tags' onChange={onChange} placeholder='Enter Tags' />
        <CustomTextArea type='text' name='description' onChange={onChange} placeholder='Enter Description' />
        <StyledButton>Add Product</StyledButton>
      </form>
    </CustomDrawer>
  )
}

export default AddProduct
