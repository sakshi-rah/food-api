import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Show.css"

import FoodItemCard from '../../Component/FoodItemCard/FoodItemCard'

function Show() {
  const [foodItems, setFoodItems] = useState([])

  async function loadData(){
    // load data from API
    const response = await axios.get('/all-food-items')
    setFoodItems(response.data.data)
  }

  useEffect(()=>{
    loadData()
  }, [])

  return (
    <div className='show-container'>
      <h1><u>Show All Food Items</u>🍜</h1>
      <div className='show-subcontainer'>
      {
        foodItems.map((item, index)=>{
            return (
            <FoodItemCard
              id={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              key={index}
              />)
        })
      }
      </div>

      <div className='button-container'>
      <a href='http://localhost:3000/add'><button type="button">Add Food Item</button></a>
      </div>
     
    </div>
  )
}

export default Show