import React from 'react';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='main-container'>
            <div>
                <p className='para'>Hello from Home Page</p>
                <Link to='/product'><button className='home-button'>Products</button></Link>
                <Link to='/attribute'><button>Attribute</button></Link>
            </div>
        </div>
        
    );
}
