import React from 'react';
import { useSelector} from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems} = cart;

  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/ ">AMAZONA</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          <Link to="/signin">SignIn</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id" element={<CartScreen />}></Route>
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
