
import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext, CartContextProvider } from './context/Context'
import CartProducts from './components/cart/CartProducts'
import Initial from './pages/Initial'
import Added from './components/Added/Added'
import Ingresar from './pages/Ingresar'
import SearchListContainer from './components/SearchListContainer/SearchListContainer'
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra'

function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='' element={<Initial/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<CartProducts/>} />
          <Route path='/addeditem/:Id' element={<Added/>}/>
          <Route path='/session' element= {<Ingresar/>} />
          <Route path='search/:busqueda' element={<SearchListContainer/>} />
          <Route path='/finalizar-compra' element={<FinalizarCompra/>}  ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App