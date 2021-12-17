  import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
  
  export const GifExpertApp = () => {

    const [categories, setCategories] =  useState(['Rick', 'Morty', 'Jerry', 'Squash']);
    const handleAdd = () => {
       //setCategories(['Jessica', ...categories]);
    //    setCategories(catg => [...catg, 'Jessica'])
    }

      return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr/>
        {/* <button onClick={() => handleAdd()}>Agregar</button> */}
        <ol>
            {
              categories.map(category => {
                return <li key={category}>{category}</li>  
              })
            }           
        </ol>
     
        </>
      )
  }
  