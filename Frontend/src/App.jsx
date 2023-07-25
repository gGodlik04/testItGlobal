import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { getClients } from './Api';

export default function App (props)
{ 

  const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getClients();
        setArticles(data.data);
    }

  return (
    <div className="App">
      <div key="KEY">
            <p>________________________</p>
            {articles.map((article) => {
                return (
                    <div>
                        <p>    
                            {console.log(article)}
                            {article.name}
                        </p>
                    </div>
                );
            })}
        </div>    
    </div>
  )
}


