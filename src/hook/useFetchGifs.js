//import React from 'react'

import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";
//las imaenes ahora esta en este cunstom componets 
export const useFetchGifs = (category) => {
    const[images,Setimages]=useState([])
    const[isLoading,setisLoading]=useState(true)
 
 

    //podriamos hacer una funcion en la cual esta si podria ser asincrona 
    //esto es prmitido para actualizar las imagenes 
    const getImagenes=async()=>{
      const newImages=await getGifs(category);
      Setimages(newImages)
      setisLoading(false);
    }
    
    useEffect(() => {
      
     getImagenes()
      //podriamos estar tentado de hacer esto asi:
      // const newImagenes= getGifs(category)//pero se que esto es una promesa en teoria podria ser aqui el await y el useefecct el async y tiene ucho sentido lo que acaba de escribir
      // //  pero si guardo los cmabios esto no funcionaria porque dno puede hacer asinrcono el useeffect  no le gusta, el useefecct tiene que regresar una funcion y no una promesa entonces no puedo usar el async
      // setImagenes(newImagenes)
    //pero hay muchas formas de hacer so 
    // getGifs(category)
    //.then(newImagenes =>setImagenes(newImagenes))
    
    }, [])
    
    //console.log(getImagenes())






//retorno un objeto y si lo retorno es un hook osea un hook es simplemente una funcion 
//que regresa algo eso es un objeto que tiene la imagen y loai\din

    return{
     images:images,
     //si a propiedad apunta al mismo nombre solo se deja el nombre como tal no la asignacion 
     //images:images si no solo images
     images,
     isLoading
    }
}
