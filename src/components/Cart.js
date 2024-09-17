import '../styles/Cart.css'
import { useState } from 'react'

const Cart = ({cart, updateCart}) =>{
    // on crée un state cart et on lui associe la méthode updateCart qui permet de le mettre à jour
    const [isOpen, setIsOpen] = useState(false)
    const monsteraPrice = 8
    return( isOpen ?(
        <div className="lmj-cart">
            <button onClick={()=>{setIsOpen(false)}} className='lmj-cart-toggle-button'>Fermer</button>
            <h2>Panier</h2>
            <div>
                
               
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>    
            <button onClick={()=>{updateCart(0)}}>Vider le panier</button>                     
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