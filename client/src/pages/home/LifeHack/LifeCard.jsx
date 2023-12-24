import React from 'react'
import { useNavigate } from 'react-router-dom'

const LifeCard = ({item}) => {
  const navigate=useNavigate()
  const life_url=item.attributes.videos.data[0].attributes.url
  return (
    <div className='card' onClick={()=>navigate("/reels")}>
            {/* <img src={item.image} className='card-image'/> */}
            <iframe src={'https://www.youtube.com/embed/'+`${life_url}`.split("?v=")[1]} title="video2"  allowFullScreen className='card-image'></iframe>

    </div>
  )
}

export default LifeCard