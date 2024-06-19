import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllProductsPage from './pages/AllProductsPage'
import SpecificProductPage from './pages/SpecificProductPage'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<AllProductsPage/>}/>
      <Route path='/product/1' element={<SpecificProductPage/>}/>
     </Routes>
    </>
  )
}

export default App
