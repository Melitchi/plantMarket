import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import React, {useState, useEffect} from 'react';
import '../styles/Layout.css'

function App() {
	
	const savedCart = localStorage.getItem('panier')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    useEffect(() => {
        localStorage.setItem('panier',JSON.stringify(cart))
    },[cart])

  return (
	<div>
		<Banner/>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>  );
}

export default App;
