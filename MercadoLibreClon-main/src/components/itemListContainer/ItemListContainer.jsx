import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebase/config'


const ItemListContainer = ({categoriaId}) => {
  const [loading, setLoading] = useState(true)
  const [products, setProduct] = useState([])
  const [prodDb, setProdDb] = useState([])
  const params = useParams()

  useEffect(() => {
    const queryDB = getFirestore(app)
    const queryCollection = collection(queryDB, "datos")
    getDocs(queryCollection)
      .then((res) => {
        const data = res.docs.map(doc => doc.data());
        setProdDb(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []); 

    return (
      loading ?
        <div className='container spinner'>
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <div className='itemList container d-flex'>
            <ItemList products={products} categoria={params.categoriaId} />
        </div>
        )
}

export default ItemListContainer