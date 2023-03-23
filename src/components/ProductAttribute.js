import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const ProductAttribute = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://random-data-api.com/api/v2/users?size=65`, {
    }).then(res => {
        setData(res.data)
    })
},[])
const [value,setValue] = useState('')
const onChange=(e)=>{
  setValue(e.target.value)
}
const [cardContainer,setCardContainer] = useState('card-container')
const [popup,setPopup] = useState('popuphidde')
const [first,setFirst] = useState('')
const onSearch = (search)=>{
 for (let item in data){
  if(data[item].first_name===search){
    console.log("first")
    setFirst(data[item])
    setPopup('popup')
    setCardContainer('card-hidden')
  }
 }
}

const ChangeClass = ()=>{
  setPopup('popuphidden')
  setCardContainer('card-container')
}

console.log(first)
  return (
    <div>
    <input value={value} onChange={onChange} placeholder='search here'/><button onClick={()=>onSearch(value)}>Search</button>
    
    {
      data.map(item=>{
        return(
          <div className={cardContainer}>
            <p>Name: {item.first_name} {item.last_name}</p>
            <p>Email: {item.email}</p>
          </div>
        )
      })
    }
    <button onClick={ChangeClass} className="close-button">
    X
  </button>
    <div className={popup}>
    <p>Name: {first.first_name} {first.last_name}</p>
    <p>Email: {first.email}</p>
    </div>
  </div>  
  )
}

export default ProductAttribute;