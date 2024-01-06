import React from 'react'
import brand1 from '../assets/brands/brand1.svg'
import brand2 from '../assets/brands/brand2.svg'
import brand3 from '../assets/brands/brand3.svg'
import brand4 from '../assets/brands/brand4.svg'
import brand5 from '../assets/brands/brand5.svg'
import brand6 from '../assets/brands/brand6.svg'
import brand7 from '../assets/brands/brand7.svg'

const Brands = () => {
  return (
    <div className='flex mt-[450px] px-[80px] justify-between'>
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand4} />
        <img src={brand5} />
        <img src={brand6} />
        <img src={brand7} />
    </div>
  )
}

export default Brands