import { useState } from "react";


export function AddCategory({OnNewCategory}) {

    const [ inputValue, setValue ] = useState('');

   /*  const onInputChange = (event) =>{
        console.log(event.target.value);
        setValue(event.target.value);
    } */

    const onInputChange = ({target}) =>{
        setValue(target.value);
    }

    const onSumit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories(cat => [...cat,inputValue])
        OnNewCategory(inputValue.trim());
        setValue('');
    }

    return ( 
        <form onSubmit={(event) => onSumit(event)}>
            <input 
                type="text" 
                placeholder="Buscar GIFS" 
                value={ inputValue }
                onChange={ (event) => onInputChange(event)}
            />
        </form>
     );
}

