import '../styles/ShoppingList.css'
import {plantList} from '../data/plantList'
import PlantItem from './PlantItem'

const ShoppingList = ()=>{
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
	)
    return (
        <div>
            <ul>
                {categories.map((category,index) => (
                    <li key={`${category}-${index}`}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                        <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water}/>                        
                ))}
            </ul>           
        </div>
    ) 
}

export default ShoppingList