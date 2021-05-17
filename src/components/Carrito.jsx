import React, { useEffect } from 'react';
import { useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) =>({
        carrito:{
            margin: 12,
            padding: 12,
            borderColor: 'black',
            backgroundColor: 'rgba(15, 160, 2, 0.8)',
            borderRadius:10,
            m: 5,
            // width: '50%',
         },
        cuentaTotal:{
            display: 'block',
            // position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 12,
            padding: 12,
            borderColor: 'black',
            backgroundColor: 'rgba(15, 160, 2, 0.5)',
            borderRadius:10,
            m: 5,
            width: '50%',
         },
         central:{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'space-evenly', 
            backgroundImage: 'url(/Colores y texturas/06.jpg)',
            // width: '50%',
         }
}))

function Carrito(){
    const classes = useStyles()
    var [total, setTotal] = useState(0)

    var [productos, setProductos] = useState([
        {
        id: 1,
        name: "Celular Smasung s21",
        price: 199999,
        stock: 34,
        qty: 1,
        subtotal: "",
    },
    {
          id: 2,
         name: "Heladera Smasung s21",
         price: 899999,
         stock: 4,
         qty: 1,
        subtotal: "",
    },
    {
        id: 3,
        name: "Audio Smasung s21",
        price: 399999,
        stock: 34,
        qty: 1,
        subtotal: "",
    },
    {
        id: 4,
        name: "TV Smasung s21",
        price: 799999,
        stock: 15,
        qty: 1,
        subtotal: "",
    }
    ]);


function decrement (item) {
        var changed = productos.map(function (producto){
            if (producto.id == item.id)
            {
                producto.qty = producto.qty - 1
                producto.stock = producto.stock + 1
                producto.subtotal = producto.qty * producto.price
            }
            return producto
        })

        setProductos(changed)
        updateTotal()
};

function increment (item) {
        if (item.stock == 0 ) {
            return;
        }
    var changed = productos.map(function (producto){
        if (producto.id == item.id)
        {
            producto.qty = producto.qty + 1
            producto.stock = producto.stock - 1
            producto.subtotal = producto.qty * producto.price
        }
        return producto
    })

    setProductos(changed)
    updateTotal()
}

function updateTotal () {
    let total = productos.reduce(function (a,b){
        return a + (b.price * b.qty)

    }, 0)
    setTotal(total)
}
useEffect(()=> {
    updateTotal()
})

return (
    <div className={classes.central}>
        {
            productos.map(function (producto){
                return (
                   <Box border={2} className={classes.carrito} >
                    <div key={producto.id}>
                        <div>{producto.name}</div>
                        <div><b>Disponibles:</b> {producto.stock} - <b>Cantidad:</b> {producto.qty} - <b>Precio unitario:</b>
                        $ {producto.price} - <b>Subtotal: $</b> {producto.subtotal} </div>
                        <div>
                            <button disabled={producto.qty == 0} onClick={() => decrement(producto)}>-</button>
                            <span>{producto.qty}</span>
                            <button disabled={producto.qty == producto.stock} onClick={() => increment(producto)}>+</button>
                        </div>
                    
                    </div>
                    </Box>
                )
            })
        }
        <Box className={classes.cuentaTotal} border={2}>
            <h3>Total a pagar: <b>$ {total}</b> </h3>
        </Box>
    </div>
)
    }
export default Carrito