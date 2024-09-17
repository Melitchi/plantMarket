import '../styles/ShoppingList.css'
import {plantList} from '../data/plantList'
import PlantItem from './PlantItem'

const ShoppingList = ({cart,updateCart})=>{
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
	)
    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <div key={plant.id} >
                        <PlantItem name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} cart={cart} updateCart={updateCart}/>
                        <button onClick={()=>{updateCart(cart +1)}}> Ajouter au panier</button>                     
                        </div> 
                ))}
                
            </ul>           
        </div>
    ) 
}




export default ShoppingList