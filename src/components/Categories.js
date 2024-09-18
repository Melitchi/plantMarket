

const Categories = ({categories, updateActiveCategory, activeCategory}) =>{

  const handleOnChange= (e) =>{
    console.log(e)
    console.log(e.target.value)

    updateActiveCategory(e.target.value)
  }


  return(
    <div>
      <select onChange={(e)=>{updateActiveCategory(e.target.value)}}>
        <option value={""}>Tous</option>
        {categories.map((category,index) => (
          <option key={`${category}-${index}`} value={category} >{category}</option>
              ))}
      </select>
      </div>
  )

}

export default Categories