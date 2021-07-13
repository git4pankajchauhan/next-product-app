import React from 'react'
import Image from 'next/image'

const Banner = ({ title, img_src }) => {
  return (
    <section className='banner-section'>
      <h2 className='title'>{title}</h2>
      <Image className='image' src={img_src} alt={title} />
    </section>
  )
}

export default Banner
