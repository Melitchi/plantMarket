import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import React, {useState} from 'react';
import '../styles/Layout.css'

function App() {
  const [cart, updateCart] = useState(0)

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
