import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export function GifGrid({category}) {

    const {images, isLoding} = useFetchGifs(category);
    

    return ( 
        <>
            <h3>{category}</h3>
            {
                /* isLoding ? (<h2>Cargando...</h2>): null */
                /* isLoding && (<h2>Cargando...</h2>) */

            }
            
            
            
                <div className="card-grid">
                    {
                        images.map((image) => (
                       /*  <li key={id}>{title}</li> */
                       <GifGridItem 
                        key={image.id}
                        {...image}
                        /* title={image.title}
                        url={image.url} */
                       />
                        ))
                    }
                    
                </div>
        </>
     );
}



