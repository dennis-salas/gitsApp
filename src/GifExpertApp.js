import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Gifs'])
    
    
    return (
        <div>
            <h2 className="title">Gifs App</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

