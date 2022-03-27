import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/ ">AMAZONA</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">SignIn</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id?" element={<CartScreen />}></Route>
          <Route path="/product/:id" element = {<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
