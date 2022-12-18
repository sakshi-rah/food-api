import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"

import Show from "./Views/Show/Show"
import Add from "./Views/Add/Add"

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Show/>}/>
   <Route path='/add' element={<Add/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App