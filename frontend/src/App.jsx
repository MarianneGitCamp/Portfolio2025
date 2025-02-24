import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Test from './pages/Detaillespages/test'
import Mvg from './pages/Detaillespages/mvg'
import Sbbw from './pages/Detaillespages/Sbbw'
const App = () => {
  return (
    <div className=''>
      <Routes>
       < Route path='/' element={<Home/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path ='/Detaillespages/test' element={<Test/>}/> {/** bien mettre le dossier avant sinon la route marche pas logique */}
       <Route path='Detaillespages/mvg' element={<Mvg/>}/>
       <Route path='Detaillespages/sbbw' element={<Sbbw/>}/>
      </Routes>
      

    </div>
  )
}

export default App
