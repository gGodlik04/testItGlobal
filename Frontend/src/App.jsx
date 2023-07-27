import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getUsers } from './components/Api';
import { getClientByName } from './components/Api';
import { API_KEY } from './components//key';
import Users from './components/Users';
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search';


export default function App(props) {

  const [dataBoolean, setDataBoolean] = useState(true)

  const [searchValue, setSearchValue] = useState('')

  const [articles, setArticles] = useState([]);

  const [value, setValue] = useState('')

  useEffect(() => {
    dataBoolean ? getData() : getDataByName(searchValue)
  },[searchValue])

  useEffect(() => {
    const onKeypress = (event) => { if (event.code == 'Enter') { setSearchValue(event.target.value); console.log('da'); setDataBoolean(false) } };
    document.querySelector('.search__input').addEventListener('keypress', onKeypress);

     return () => {
     document.removeEventListener('keypress', onKeypress);
    };
  }, []);


  const getData = async () => {
    const data = await getUsers();
    setArticles(data.data);
  }

  const getDataByName = async (ref) => {
    const data = await getClientByName(ref);
    setArticles(data.data);
    setDataBoolean(false);
  }


  return (
    <div className="App">
      <Search/>
      <Users articles={articles} />
    </div>
  )
}


