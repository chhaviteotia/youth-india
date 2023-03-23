import React, { useState, useEffect } from 'react';
import "../App.css"
import axios from 'axios';

function Product() {
  const [data, setData] = useState([]);
// fetch data
useEffect(() => {

    axios.get(`https://random-data-api.com/api/v2/users?size=64`, {
    }).then(res => {
        setData(res.data)
    })
},[])
// add pagination
const [currentPage, setCurrentPage] =useState(1)
  const postsPerPage = 8
  const lastPostIndex =currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex,lastPostIndex)
  const number = (data.length-1)/postsPerPage;

  const callPage =(e)=>{
    const num = e.target.id
    setCurrentPage(num)
  }
  var elements = [];
  for(let i =1; i < number+1; i++){
      elements.push(<p className="list-item" id={i} onClick={callPage}>{i}</p>);
  }

   return(
    <div>
      {
        currentPosts.map(item=>{
          return(
            <div className='product-card'>
              <p>{item.username}</p>
              <img src={item.avatar} alt={item.id}></img>
            </div>
          )
        })
      }
      <div className='pagination'>
      {elements}
      </div>
    </div>
  )
}

export default Product;
