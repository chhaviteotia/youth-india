import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
//import Product from './components/Product';
import Home from './components/Home';
import ProductAttribute from './components/ProductAttribute';
const Lazy = React.lazy(()=>(import('./components/Product')))

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/product' element={<React.Suspense fallback="Loading.....">
          <Lazy></Lazy>
          </React.Suspense>
        }></Route>
        <Route exact path='/attribute' element={<ProductAttribute></ProductAttribute>}></Route>
      </Routes>
    </Router>   
  );
}

export default App;
