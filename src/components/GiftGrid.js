import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ( { category } ) => {

    const { data: imgs, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            <div className="card-grid"> 

                { loading &&  <p className= "animate__animated animate__flash">Loading</p> }

                {
                    imgs.map(  img  => (
                    <GiftGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    ))
                } 
            </div>
        </>
    )
}
