import React, { useState, useEffect } from 'react'
import { useCartContext } from "../../context/Context"
import { useAuth } from "../../context/AuthContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import "./finalizar.css"
import { Link } from 'react-router-dom'

const FinalizarCompra = () => {
  const { cart, totalPrice, removeCart, addPurchases } = useCartContext();
  const { user } = useAuth();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
    telefono: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        nombre: user.displayName || prev.nombre,
        email: user.email || prev.email
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
    if (!formData.direccion.trim()) newErrors.direccion = "La dirección es requerida.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido.";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido.";
    } else if (!/^\d{7,14}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = "El teléfono debe tener entre 7 y 14 números.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const order = {
      buyer: formData,
      items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.cantidad })),
      total: totalPrice(),
      date: new Date().toISOString()
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const { id } = await addDoc(orderCollection, order);
      setOrderId(id);
      addPurchases(cart);
      removeCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className='container checkout-page-container' style={{ textAlign: 'center', padding: '50px' }}>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">¡Compra realizada con éxito!</h4>
          <p>Tu código de pedido es: <strong>{orderId}</strong></p>
          <hr />
          <p className="mb-0">Gracias por confiar en nosotros.</p>
        </div>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className='container checkout-page-container'>
      <h4 id='tittleConfirm'>Confirma tu compra</h4>
      <div className="containerForm card">
        <form className="formulario" onSubmit={handleSubmit}>

          <div className="formulario__grupo" id="grupo__nombre">
            <label htmlFor="nombre" className="formulario__label">Nombre Completo</label>
            <div className="formulario__grupo-input">
              <input
                type="text"
                className={`formulario__input ${errors.nombre ? 'input-error' : ''}`}
                name="nombre"
                id="nombre"
                placeholder="Ej: Lucas Britos"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            {errors.nombre && <p className="formulario__input-error-activo">{errors.nombre}</p>}
          </div>

          <div className="formulario__grupo" id="grupo__email">
            <label htmlFor="email" className="formulario__label">Correo Electrónico</label>
            <div className="formulario__grupo-input">
              <input
                type="email"
                className={`formulario__input ${errors.email ? 'input-error' : ''}`}
                name="email"
                id="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="formulario__input-error-activo">{errors.email}</p>}
          </div>

          <div className="formulario__grupo" id="grupo__direccion">
            <label htmlFor="direccion" className="formulario__label">Dirección de Envío</label>
            <div className="formulario__grupo-input">
              <input
                type="text"
                className={`formulario__input ${errors.direccion ? 'input-error' : ''}`}
                name="direccion"
                id="direccion"
                placeholder="Calle Falsa 123"
                value={formData.direccion}
                onChange={handleChange}
              />
            </div>
            {errors.direccion && <p className="formulario__input-error-activo">{errors.direccion}</p>}
          </div>

          <div className="formulario__grupo" id="grupo__telefono">
            <label htmlFor="telefono" className="formulario__label">Teléfono</label>
            <div className="formulario__grupo-input">
              <input
                type="text"
                className={`formulario__input ${errors.telefono ? 'input-error' : ''}`}
                name="telefono"
                id="telefono"
                placeholder="11 1234 5678"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            {errors.telefono && <p className="formulario__input-error-activo">{errors.telefono}</p>}
          </div>

          <div className="formulario__grupo formulario__grupo-btn-enviar">
            <button type="submit" className="formulario__btn" disabled={loading}>
              {loading ? 'Procesando...' : 'Confirmar Compra'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FinalizarCompra