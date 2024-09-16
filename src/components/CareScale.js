import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const CareScale = ({scaleValue, careType}) => {
    const range = [1,2,3]
    const scaleType = careType === 'light'? <img src={sun} alt="sun-icon"/> : <img src={water} alt="sun-icon"/>

    return (
        <div onClick={()=>handleClick(careType, scaleValue)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

}

function handleClick (type, value) {
    console.log(type)
    console.log(`type = ${type}  value = ${value}`)
    switch(value){
        case(1):
            console.log(`Cette plante requiert peu ${type === "water" ? `d'eau`:`de lumière`}`)
            break
        case(2):
            console.log(`Cette plante requiert modérément ${type === "water" ? `d'eau`:`de lumière`}`)
            break
        case(3):
            console.log(`Cette plante requiert beaucoup ${type === "water" ? `d'eau`:`de lumière`}`)
            break
        default:
            console.log('on a cliqué')
    }
}
   
export default CareScale