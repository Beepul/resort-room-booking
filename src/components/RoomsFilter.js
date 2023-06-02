import React, { useState } from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title';

// get all unique type value
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({rooms}) => {
   
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get all unique type of room and add all to the list
    let types = getUnique(rooms, 'type');
    types =['all',...types]

    // get all unique number of people that can fit for the room
    let people = getUnique(rooms,'capacity');
    

  return (
    <section className='filter-container'>
        <Title title={"search rooms"} />
        <form className='filter-form'>
       
            {/*select type*/}
            <div className='form-group'>
                <label htmlFor='type'>room type</label>
                <select 
                    name='type' 
                    id='type' 
                    value={type} 
                    className='form-control' 
                    onChange={handleChange}>
                        {types.map((item,index)=> {
                            return <option value={item} key={index}>{item}</option>
                        })}
                </select>
                <span className='custom-arrow'></span>
            </div>
            {/*end of select type*/}
            {/*select number*/}
            <div className='form-group'>
                <label htmlFor='type'>room type</label>
                <select 
                    name='capacity' 
                    id='capacity' 
                    value={capacity} 
                    className='form-control' 
                    onChange={handleChange}>
                        {people.map((item,index)=> {
                            return <option  value={item} key={index}>
                                <p className='option'>{item}</p>
                                </option>
                        })}
                </select>
                <span className='custom-arrow'></span>
            </div>
            {/*end of select number*/}
            {/*room price */}
            <div className='form-group'>
                <label htmlFor='price'>
                    room price ${price}
                </label>
                <input type='range' name='price' min={minPrice} max={maxPrice} id='price'
                    value={price} onChange={handleChange} className='form-control price-control' />
            </div>
            {/*end of room price */}
            {/*room size */}
            <div className='form-group'>
                <label htmlFor='size'>
                    room size
                </label>
                <input type='number' name='minSize' id='size'
                    value={minSize} onChange={handleChange} className='size-input' />
                <input type='number' name='maxSize' id='size'
                    value={maxSize} onChange={handleChange} className='size-input' />
            </div>
            {/*end of room size */}
            {/*extras */}
            <div className='form-group'>
                <div className='single-extra'>
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor='breakfast'>breakfast</label>
                </div>
                <div className='single-extra'>
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor='breakfast'>pets</label>
                </div>
            </div>
            {/*end of extras */}

        </form>
    </section>
  )
}

export default RoomsFilter