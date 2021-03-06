import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    // }
    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <GiftGrid 
                            key= { category }
                            category = { category } 
                        />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;  