import React from 'react'

const Navbar = () => {
    return (
        <>
        <button>Home</button>
        <select>
            <option value="Categories" selected disabled>Categories</option>
            <option value="Gaming">Gaming</option>
            <option value="Car Accessories">Car Accessories</option>
            <option value="Phones Accessories">Phones Accessories</option>
        </select>
        <button>Checkout</button>
        </>
    )
}

export default Navbar