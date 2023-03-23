import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAttribute = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://random-data-api.com/api/v2/users?size=65`, {
    }).then(res => {
        setData(res.data)
    })
},[])
const [value,setValue] = useState(' ')
const onChange=(e)=>{
  setValue(e.target.value)
}
const [first,setFirst] = useState(' ')
const [last,setLast] = useState(' ')
const [email,setEmail] = useState(' ')
const onSearch = (search)=>{
 for (let item in data){
  if(data[item].first_name===search){
    console.log("first")
    setFirst(data[item].first_name)
    setEmail(data[item].email)
    setLast(data[item].last_name)
  }else{
    // console.log((data[item].first_name))
    console.log(data[item].first_name===search)
  }
 }
}
console.log(first,last,email)
  return (
    <div>
    <input value={value} onChange={onChange} placeholder='search here'/><button onClick={()=>onSearch(value)}>Search</button>
    {
      data.map(item=>{
        return(
          <div>
            <p>name: {item.first_name} {item.last_name}</p>
            <p>Email: {item.email}</p>
          </div>
        )
      })
    }
      
    </div>
  )
}

export default ProductAttribute;