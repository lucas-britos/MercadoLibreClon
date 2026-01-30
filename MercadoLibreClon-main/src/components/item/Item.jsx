import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './item.css'

const Item = ({product}) => {

  const [id, setId] = useState(product.id)

  function obtenerId() {
    setId(product.id)
  }


  return(
          <div className="card col-3">
          <img src={product.img} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title"> {product.nombre} </h5>
              <p className="card-text"> {product.descripcion} </p>
              <p className="card-text"><small className="text-muted"> Stock: {product.stock} </small></p>
              <Link to={`/detalle/${product.id}`}>
              <button className='btn btn-primary'>Ver detalles</button>
              </Link>
          </div>
          </div>
  )
}

export default Item