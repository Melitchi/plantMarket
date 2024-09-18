import '../styles/ShoppingList.css'
import {plantList} from '../data/plantList'
import PlantItem from './PlantItem'
import { useState } from 'react'
import Categories from './Categories'

const ShoppingList = ({cart,updateCart})=>{
    const [activeCategory, updateActiveCategory ] = useState("classique")

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
	)

    const addToCart=(name,price)=>{
        const currentPlantAdded = cart.find((plant)=> plant.name === name)
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount : currentPlantAdded.amount +1}
            ])
        }else{
            updateCart([...cart, {name,price,amount:1}])
        }
    }
    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} updateActiveCategory={updateActiveCategory} activeCategory={activeCategory} />               
            <ul className='lmj-plant-list'>
                {plantList.filter(plant => (!activeCategory || plant.category === activeCategory))
                .map((plant) => (
                    <div key={plant.id} >
                        <PlantItem name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} cart={cart} updateCart={updateCart}/>
                        <button onClick={()=>{addToCart(plant.name,plant.price)}}> Ajouter au panier</button>                     
                        </div> 
                ))}               
            </ul>           
        </div>
    ) 
}

/*
{plantList.map((plant) => (
                    <div key={plant.id} >
                        <PlantItem name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} cart={cart} updateCart={updateCart}/>
                        <button onClick={()=>{addToCart(plant.name,plant.price)}}> Ajouter au panier</button>                     
                        </div> 
                ))}
                        */



export default ShoppingList