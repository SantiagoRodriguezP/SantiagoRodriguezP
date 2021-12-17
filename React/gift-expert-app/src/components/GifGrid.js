import React, { useState, useEffect, Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFecthGifs } from "../hooks/useFetchGifts"

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFecthGifs( category );

    

   /* const [images, setImages] = useState([]);

   
    //para no volver a ejecutar
     useEffect(() => {
        getGifs(category).then( (data) => {
            setImages(data);
        });
    }, [category]);*/

   
       getGifs();
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

             <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div> 
        </>
    )
}
