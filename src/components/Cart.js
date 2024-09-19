import '../styles/Cart.css'
import { useState, useEffect } from 'react'

const Cart = ({cart, updateCart}) =>{
    // on crée un state cart et on lui associe la méthode updateCart qui permet de le mettre à jour
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,0
    )

    return( isOpen ?(
        <div className="lmj-cart">
            <button onClick={()=>{setIsOpen(false)}} className='lmj-cart-toggle-button'>Fermer</button>
            {cart.length > 0 ? (
            <div>
                <h2>Panier</h2>
                <div>
                    {
                    cart.map(({name,price,amount},index)=>(
                        <div key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                        </div>
                    )
                )}

                </div>
                <h3>Total : {total}€</h3>    
                <button onClick={()=>{updateCart([])}}>Vider le panier</button>                     
           </div>
        ) : (
				<div>Votre panier est vide</div>
			)}       
        </div> ):(            
            <div className='lmj-cart-closed'>
                <button
                    className='lmj-cart-toggle-button'
                    onClick={() => setIsOpen(true)}
                >
				Ouvrir le Panier
			</button>
		</div>        )
    )

}

export default Cart