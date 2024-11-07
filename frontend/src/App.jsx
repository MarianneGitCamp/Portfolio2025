import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
const App = () => {
  return (
    <div className=''>
      <Routes>
       < Route path='/' element={<Home/>}/>
       <Route path='/collection' element={<Collection/>}/>
      </Routes>

    </div>
  )
}

export default App
