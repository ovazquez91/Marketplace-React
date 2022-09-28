import React, {useEffect, useState} from 'react';
import Control from '../../images/control.jpg';
import axios from 'axios';

const ProductosLista = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://digitaltec.com.mx/yaydoo/usuarios/Api",
        }). then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((e) => console.log(e)).finally(()=> setLoading(false));
    }, []);
    return (
        
        <>
        <h1 className='title'>Productos</h1>
        <div className='productos'>
        {loading && (
<div>
{""}
<h1>Loading...</h1>
</div>
)}
{data.map((product) => (    
        <div className='producto'>
            <a href='#'>
            <div className='producto__img'>
                <img width={250} src={Control} alt="" />
            </div>
            </a>
            <div className="producto__footer">
                <h1>{product.nombre_producto}</h1>
                <p>{product.sku}</p>
                <p className='price'>${product.precio}</p>       
            </div>
            <div className='buttom'>
                <button className='btn'>
                  Añadir al carrito      
                </button>
            </div>
            </div>
            ))}
        </div>
        </>
    );
};

export default ProductosLista;