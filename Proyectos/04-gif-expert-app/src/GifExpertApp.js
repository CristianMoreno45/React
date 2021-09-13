import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);
    // const handleAdd = () => {
    //     setCategories([...categories,'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map(category => {
                       return  <GifGrid
                            key={category}
                            category={category}
                        />
                    })

                }
            </ol>
        </>
    );
};