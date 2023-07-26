import React from 'react';


export default function Search (props)
{ 
  return (
    <div className="search">
       <from className='search__form'>
            <input
            type="text"
            placeholder=''
            className='search__input'
            />
       </from>
    </div>
  )
}