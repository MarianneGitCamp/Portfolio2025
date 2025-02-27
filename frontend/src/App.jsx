import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Test from './pages/Detaillespages/test'
import Mvg from './pages/Detaillespages/mvg'
import Sbbw from './pages/Detaillespages/Sbbw'
import Bbw from './pages/Detaillespages/Bbw'
import Opbw from './pages/Detaillespages/Opbw'
import Mmbw from './pages/Detaillespages/Mmbw'
import Moi from './pages/Moi'
const App = () => {
  return (
    <div className=''>
      <Routes>
       < Route path='/' element={<Home/>}/>
       <Route path='/collection' element={<Collection/>}/>
      <Route path='/Moi' element={<Moi/>}/>
       <Route path ='/Detaillespages/test' element={<Test/>}/> {/** bien mettre le dossier avant sinon la route marche pas logique */}
       <Route path='Detaillespages/mvg' element={<Mvg/>}/>
       <Route path='Detaillespages/sbbw' element={<Sbbw/>}/>
       <Route path='Detaillespages/bbw' element={<Bbw/>}/>
       <Route path='Detaillespages/opbw' element={<Opbw/>}/>
       <Route path ='Detaillespages/mmbw' element={<Mmbw/>}/>
      </Routes>
      

    </div>
  )
}

export default App
