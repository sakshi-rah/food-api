import React, {useState} from 'react'
import axios from "axios"

function App() {
   const [foodItems, setFoodItems]=useState([])

async function loadData(){
  const response = await axios.get('/Food-item-by-category?category=breakfast')
  console.log(response.data.data)
  setFoodItems(response.data.data)
}
  
  return (
    <div className="App">
      <h1>Food API</h1>
      <button onClick={loadData}>Make API call</button>
    {
      foodItems.map((item)=>{
        return(<h1>{item.title}</h1>)
      })
    }
    </div>


  );
}

export default App;
