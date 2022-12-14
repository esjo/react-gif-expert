import { useState } from "react"
import { AddCategory,GifGrid } from "./components/";//Debido a que hay un index no se necesita poner el index, es redundante

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);


    const onAddCategory = (newCategory) =>{

        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
        //setCategories(cat => [...categories,'nuevo'])
        
           
    }
    return(
        <>

            <h1>GIF</h1>



            <AddCategory 
                //setCategories={setCategories} 
                OnNewCategory={event => onAddCategory(event)}
            />




            {
            categories.map(category => 
                (
                    <GifGrid key={category} category={ category }/>
                )
            )}
            
        </>
    )
}