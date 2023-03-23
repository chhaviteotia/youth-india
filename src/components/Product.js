import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(search)
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
// const fetchData = async () => {
//     const response = await fetch('https://fakestoreapi.com/products/');
//     const result = await response.json();
//     console.log(result)
//     setData(result);
//   };
  
useEffect(() => {

    axios.get(`https://random-data-api.com/api/v2/users?size=65`, {
    }).then(res => {

        setData(res.data)

    })
},[])

console.log(data)
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

   return(
    <div>
      {
        data.map(item=>{
          return(
            <div>
              <p>{item.username}</p>
              <img src={item.avatar} alt={item.id}></img>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product;
