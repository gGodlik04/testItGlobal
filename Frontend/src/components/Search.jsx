import React from 'react';
import { HandySvg } from 'handy-svg'
import searchSvgSrc from './../svg/search.svg'

export default function Search (props)
{ 
  return (
    <div className="search">
        <input
          type="text"
          placeholder=''
          className='search__input'
        />
        <HandySvg
          src={searchSvgSrc}
          width="24px"
          height="24px"
        />
      </div>
  )
}