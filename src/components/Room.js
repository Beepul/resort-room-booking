import React from 'react'
import defaultImg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

const Room = ({room}) => {
    const {name,slug,images,price,description, extras} = room;
    // console.log(room)
  return (
    <article className='room'>
        <div className='img-container'>
            <img src={images[0] || defaultImg} alt="single room" />
            <div className='price-top'>
                <h6>${price}</h6>
                <p>Per Night</p>
            </div>
            {/* <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
                Features
            </Link> */}
        </div>
        <div className='room-info'>
        <p className='room-name'>{name}</p>
        <p className='room-desc'>{description}</p>
        <Link to={`/rooms/${slug}`}>Read more</Link>
        <ul className='extras'>
            <li className='heading'>Extras:</li>
            {extras.map((item,index)=> (
                <li key={index} className='list'><FaCheck />{item}</li>
            ))}
        </ul>
        <Link to={`/rooms/${slug}`} className='btn-primary room__links'>
                Features
        </Link>
        </div>
    </article>
  )
}

export default Room

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,

    })
}