import './App.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/Context'
import { AuthProvider } from './context/AuthContext'
import CartProducts from './components/cart/CartProducts'
import Initial from './pages/Initial'
import Added from './components/Added/Added'
import Ingresar from './pages/Ingresar'
import SearchListContainer from './components/SearchListContainer/SearchListContainer'
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra'
import Ofertas from './pages/Ofertas'
import Cupones from './pages/Cupones'
import Favoritos from './pages/Favoritos'
import MisCompras from './pages/MisCompras'
import ScrollToTop from './components/helpers/ScrollToTop'

function App() {

  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <Routes>
              <Route path='' element={<Initial />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
              <Route path='categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<CartProducts />} />
              <Route path='/addeditem/:Id' element={<Added />} />
              <Route path='/session' element={<Ingresar />} />
              <Route path='search/:busqueda' element={<SearchListContainer />} />
              <Route path='/ofertas' element={<Ofertas />} />
              <Route path='/cupones' element={<Cupones />} />
              <Route path='/favoritos' element={<Favoritos />} />
              <Route path='/mis-compras' element={<MisCompras />} />
              <Route path='/finalizar-compra' element={<FinalizarCompra />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </>
  )
}

export default App