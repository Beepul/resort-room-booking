import React, { useContext, useEffect, useState } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import { FaCheck } from 'react-icons/fa';


const SingleRoom = () => {
  const [room, setRoom] = useState();
  const {slug} = useParams()
  const {getRoom} = useContext(RoomContext)

  useEffect(()=>{
   const singleRoom = getRoom(slug);
   setRoom(singleRoom);
  },[slug])
  if(!room){
    return <div className='error'>
      <h3>no such room could be found...</h3>
      <Link to={'/rooms'} className='btn-primary'>back to rooms</Link>
    </div>
  }
  const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
  const [mainImg,...restImages] = images;
  return (
    <>
   <StyledHero img={mainImg || defaultBcg}>
    <Banner title={`${name} room`}>
      <Link to={`/rooms`} className='btn-primary'>
        back to rooms
      </Link>
    </Banner>
   </StyledHero>
   <section className='single-room'>
    <div className='single-room-images'>
      {restImages.map((item,index)=>(
        <img src={item} key={index} alt={name} />
      ))}
    </div>
    <div className='single-room-info'>
      <article className='desc'>
        <h3>details</h3>
        <p>{description}</p>
      </article>
      <article className='info'>
        <h3>info</h3>
        <h6><span>price:</span> ${price}</h6>
        <h6><span>size:</span> ${size} SQFT</h6>
        <h6><span>max capacity:</span> {
          capacity > 1 ? `${capacity} people` : `${capacity} person`  
        }</h6>
        <h6><span>Pets:</span>{pets ? ' allowed' : 'not allowed'}</h6>
        <h6>{breakfast && <span>Breakfast: included</span>}</h6>
        <Link to={`/`} className='btn-primary room__links'>
                Book Now
        </Link>
      </article>
    </div>
   </section>
   <section className='room-extras'>
    <h6>extras</h6>
    <ul className='extras'>
      {extras.map((item,index)=>(
        <li key={index}><FaCheck />{item}</li>
      ))}
    </ul>
   </section>
   </>
  )
}

export default SingleRoom