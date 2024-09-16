import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import React from 'react';
function App() {
  return (
    <React.Fragment><Banner/><Cart/><ShoppingList/><Footer/></React.Fragment>
  );
}

export default App;
