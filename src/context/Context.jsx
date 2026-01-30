import React, { createContext, useContext, useState, useEffect } from 'react'


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([])
    const [coupons, setCoupons] = useState([]) // Store applied coupons with {targetCategory, discountAmount, ...}
    const [favorites, setFavorites] = useState([]) // Store favorite items
    const [purchases, setPurchases] = useState([]) // Store purchased items


    const addToCart = (item) => {
        setCart([
            ...cart,
            item
        ])
    }

    const addPurchases = (items) => {
        // Add date and items to purchases
        const newPurchase = {
            date: new Date().toLocaleDateString(),
            items: [...items],
            id: Math.random().toString(36).substr(2, 9) // Simple local id for display
        };
        setPurchases([...purchases, newPurchase]);
    }

    // Apply Coupon Logic
    const applyCoupon = (coupon) => {
        // Allow one coupon per category. If exists, replace it.
        const existingCategoryCouponIndex = coupons.findIndex(c => c.targetCategory === coupon.targetCategory);

        let newCoupons = [...coupons];
        if (existingCategoryCouponIndex >= 0) {
            newCoupons[existingCategoryCouponIndex] = coupon; // Update to new coupon
        } else {
            newCoupons.push(coupon);
        }
        setCoupons(newCoupons);
    }

    // Favorites Logic
    const toggleFavorite = (item) => {
        const isFavorite = favorites.some(fav => fav.id === item.id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    }

    const isInFavorites = (id) => {
        return favorites.some(fav => fav.id === id);
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => {
            // Check if there is a coupon for this product's category
            const relevantCoupon = coupons.find(c => c.targetCategory === act.categoria);

            let productPrice = act.descuento
                ? act.precio * (1 - act.descuento / 100)
                : act.precio;

            // Apply coupon discount if relevant
            if (relevantCoupon) {
                // discountAmount is percentage (e.g., 20)
                productPrice = productPrice * (1 - relevantCoupon.discountAmount / 100);
            }

            return prev + act.cantidad * productPrice
        }, 0)
    }


    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + parseInt(productoActual.cantidad), 0);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))


    const removeCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeCart,
                totalPrice,
                totalProducts,
                isInCart,
                removeProduct,
                coupons,
                applyCoupon,
                favorites,
                toggleFavorite,
                isInFavorites,
                purchases,
                addPurchases
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
