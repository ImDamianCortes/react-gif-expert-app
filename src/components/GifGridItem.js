import React from 'react'

const GifGridItem = ({ id, title, url }) => {

  //console.log({ id, title, url });

  return (
    <div className='p-3 w-50'>
      <div className='card mx-auto'>
        <img src={url} alt={title}></img>
      </div>
    </div>
  )
}

export default GifGridItem