import '../styles/Cart.css'

const Cart = () =>{
    const lierrePrice = 10
    const flowersPrice = 15
    const monsteraPrice = 8

    return(
        <div className="lmj-cart">
            <h2>Mon panier</h2>
            <ul>
                <li>Monstera  {monsteraPrice}€</li>
                <li>Lierre {lierrePrice}€</li>
                <li>Bouquet {flowersPrice}€</li>
            </ul>
            <p>Total: {monsteraPrice + lierrePrice + flowersPrice}</p>
        </div>
    )

}

export default Cart