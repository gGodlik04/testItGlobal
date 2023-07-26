import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getUsers } from './components/Api';
import { API_KEY } from './components//key';
import {HandySvg} from 'handy-svg'
import searchSvgSrc from './svg/search.svg'
import User from './components/User';
import './css/style.css'


export default function App(props) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
    console.log(articles);
  }, [])

  const getData = async () => {
    const data = await getUsers();
    setArticles(data.data);
  }


const [value, setValue] = useState('')

const filterUsers = 
  articles.filter(client => {
    return ((client.name.toLowerCase().includes(value.toLowerCase())) 
    // || (client.phone.toLowerCase().includes(value.toLowerCase()))
    // || (client.email.toLowerCase().includes(value.toLowerCase()))
    // || (client.address.toLowerCase().includes(value.toLowerCase()))
    // || (client.position_name.toLowerCase().includes(value.toLowerCase()))
    // || (client.department.toLowerCase().includes(value.toLowerCase()))
    // || (client.hire_date.toLowerCase().includes(value.toLowerCase()))
    )
  })


  return (
    <div className="App">

      <div className="search">
        <form className='search__form'>
          <input
            type="text"
            placeholder=''
            className='search__input'
            onChange={(event) => setValue(event.target.value)}
          />
            <HandySvg
              src = {searchSvgSrc}
              width = "24px"
              height = "24px"
              color = "red"/>
        </form>
      </div>

      <div className='users' >
        <div key='#' className='app-wrapper'>
          {filterUsers.map((article) => {
            return (
              <div>
                <User user={article}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}


