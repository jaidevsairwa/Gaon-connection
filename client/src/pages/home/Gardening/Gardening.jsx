import React from 'react'
import "./gardening.scss"
import { Garden } from '../../../public/Images'
const Gardening = () => {
  return (
    <div className='garden_container'>
      <div className='image_box'>
        <img src={Garden} />
      </div>
      <div className='text_box'>
        <h1>Gardening and farming</h1>
        <h2>A traditional Odia millet
          dish Atkel is helping fignt
          infant and maternal.</h2>
        <p>Kalalandi was once known as the land of starvtion deaths. For the past couple of years, UNICEF.</p>
      <button>Read More</button>
      </div>
    </div>
  )
}

export default Gardening