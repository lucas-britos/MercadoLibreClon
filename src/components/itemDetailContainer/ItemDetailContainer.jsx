import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDocs, collection } from "firebase/firestore"
import { app } from '../../firebase/config'
import ItemDetalle from '../itemDetail/ItemDetalle'

import Skeleton from '../Skeleton/Skeleton'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [prodDb, setProdDb] = useState([])
  const { detalleId } = useParams();


  useEffect(() => {
    if (prodDb.length > 0) {
      const selectedItem = prodDb.find((prod) => prod.id === parseInt(detalleId));
      setItem(selectedItem);
      return;
    }

    const queryDB = getFirestore(app);
    const queryCollection = collection(queryDB, "datos");
    getDocs(queryCollection)
      .then((res) => {
        const data = res.docs.map((doc) => doc.data());
        setProdDb(data);
        setLoading(false);
        const selectedItem = data.find((prod) => prod.id === parseInt(detalleId));
        setItem(selectedItem);
      });
  }, [detalleId, prodDb]);

  return (
    <div className="container">
      {loading ? (
        <div style={{ display: 'flex', gap: '40px', background: 'white', padding: '20px', borderRadius: '8px' }}>
          <div style={{ flex: 1.5 }}>
            <Skeleton type="box" style={{ width: '100%', height: '500px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <Skeleton type="text" count={1} style={{ height: '30px', width: '80%', marginBottom: '20px' }} />
            <Skeleton type="text" count={1} style={{ height: '40px', width: '40%', marginBottom: '20px' }} />
            <Skeleton type="text" count={4} />
          </div>
        </div>
      ) : (
        <div>
          <ItemDetalle item={item} allProducts={prodDb} ></ItemDetalle>
        </div>
      )}
    </div>
  );
};



export default ItemDetailContainer