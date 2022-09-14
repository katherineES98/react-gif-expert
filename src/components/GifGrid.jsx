//import  { useEffect, useState } from 'react'

import { GifIteam } from './GifIteam'
import { useFetchGifs } from '../hook/useFetchGifs'
//import { getGifs } from '../helper/getGifs'


//esta funcion atadura con el compnete es la categorya pero podria recibir la categoria por argumento y sacra toda es funcion  
//y colocarla fuera del componente o en otro archivo que es lo que voy a buscar , entonces llamare la funcion adentro y le pasare como parametro la categoria y sacare esa funcion para afuera del componente y no gabra probelam porque ya le estamos pasando la categoria al llamr la categoria asi : getGifs(category) y es mejor porque no estara reaccionando un espaico de memria pero no resuelve 
//?el probelama que cada vez que se dispara nuestro componente se redenriza la funcion cada ves que hay un cambio en el input pero es que nosotros nunca debe de colocar 
//?funciones directamente o la ejecucion de un funcion en un fuction componets porque si se redenriza  nuestro componente se va arederizar la peticion http y la funcion por eso es que no queremos hacer eso 
//?porque lo que deberia de ser es que la funcion solo se  dispare una ves o ejecute independientemente que el componente se rederize varias veces 

export const GifGrid = ({category}) => {

  //resumir lo que teniamos aqui en un coostum hook
  const { images,isLoading}=useFetchGifs(category) // que enves de destructurar un arreglo sera un objeto 
  //console.log({isLoading})
  
  //use parte del estandar de los hook aunque sea un hook personalizado
//y todo se resumen en una linea si lo hacemos asi 
  return (

    
   <>

    
    {/**aqui hay que haces un images.map */}
   
   {/* <ol>
   {  sin destructuracion
   images.map((imag) => (
     <li key={imag.id} >{imag.title}</li>
   ))
   } 
   </ol> 

   con destructuracio images.map(({id,title}) => ())
   
   */}


{/**es reconmedable crear un componente para mostrar las tarjetas en este espacio 
 * 
 */}
   
   <h3>{category}</h3>

   {/* {
    isLoading
    ?( <h2>cargando....</h2>)
    : null
   } */}
{/**and logico si es verdadero sera verdadero si es falso se queda alli y no se ejecuta 
 * otra opcion seria crearnos un componente para eso 
 * y masrle el isLoading
 * <liadingMessager ly pasarle el loading como props/>
 * */}
   {
    isLoading && ( <h2>cargando....</h2>)
 
   }
   
 
   <div className='card-grid'>
{
  images.map((image) => (
    //  <li key={id} >{title}</li>

    //regresaremos un componente enves de esa  
//le tendria que mndar el title y la url a este componente 
     
//otro patron que tambien se trabaja con estos componentes 
//?y es esparcir las property se que tenemos que mandar el title y irl y se que viene en las imagenes abriremos el {y useremos el operador sprend es como que todas las propiedades que viene en el image las estoy esparciendo en ese GifIteam  }
<GifIteam
        key={image.id}
        // title={image.title}
        // url={image.url}
        //esto sera asi:
        {...image}//sirve para que el gifIeteam reciba cada una de la spropiedades de la imagen como property, esto se usa cuando tenemos muchas propiedades 


        
        />

    ))

}

   </div>
   
   

   </>
  )
}
