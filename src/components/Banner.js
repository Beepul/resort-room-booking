import React from 'react'

const Banner = ({children,title,subtitle}) => {
  return (
    <div className='banner'>
      <div className='text-con'>
        <h2>{title}</h2>
        <div className='line'></div>
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  )
}

export default Banner