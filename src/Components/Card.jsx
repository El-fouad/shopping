import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Increment,Decrement} from "../config/action"
const Card = () => {
    const [prod, setprod] = useState()
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            setprod(response.data.products)
        })
    }, []);

        const prod_count = useSelector(state => state.count)
        const dispatch=useDispatch()
    return (
        <>
            <div className='parent'>
                {prod ? prod.map(elem => <>
                    <div className='card'>
                        <div className="img">
                            <img src={elem.images[0]} alt="" className='rimg' />
                        </div>
                        <div className="info">
                            <h3>{elem.title}</h3>
                            <button onClick={()=>dispatch(Increment())}>+</button>
                            <span>{prod_count}</span>
                            <button onClick={()=>dispatch(Decrement())}>-</button>
                            <button>Add to Cart</button>

                        </div>
                    </div>
                </>) : ""}

            </div>
        </>
    )
}

export default Card