import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
  const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
// const fetchData = async () => {
//     const response = await fetch('https://fakestoreapi.com/products/');
//     const result = await response.json();
//     console.log(result)
//     setData(result);
//   };
  
useEffect(() => {

    axios.get(`https://random-data-api.com/api/v2/users?size=64`, {
    }).then(res => {
        setData(res.data)
    })
},[])
const [currentPage, setCurrentPage] =useState(1)
  const [postsPerPage, setPostPerPage] =useState(8)
  const lastPostIndex =currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = data.slice(firstPostIndex,lastPostIndex)
  const number = (data.length-1)/postsPerPage;

// const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   }

// const displayItems = () => {
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
//     return currentData.map(item => (
//       // render each item here
//       console.log(item)
//     ));
//   }


  var elements = [];
  for(let i =1; i < number+1; i++){
      elements.push(<p className="list-item">{i}</p>);
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
      <div>
      {elements}
      </div>
    </div>
  )
}

export default Product;
