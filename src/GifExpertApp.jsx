//import React from 'react'

import { useState } from "react";
import { AddCategory, GifGrid} from './components';
//import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  //cuando queremos almacenar informacion y queremos que cambie nuestro html automaticamente tendrrmos que pensar
  //necesito un hook que ncesito para manter el estado

  {
    /**MANEJAR LAS CATEGORIAS  */
  }
  const [categories, setCategories] = useState(["One punch"]); // SIIEMPRE SERA UN ARREGLO
  //console.log(categories)

  //agregar una categoria

  const onAddCategory = (newCategory) => {
    //agregar un uevo elemento al arreglo
    //Valorant

    //!ERROR QUE COMETI en la tarea: ES QUE ESTABA ASIENDO CONT ARR= [...CATEGORIES, 'vALORANT']  RETURN ARR  EN LA CUAL AL DARLE CONSOLE.LOG(ARR) LO RETORNA BIEN PARA PROBAR PERO NO ME CAMBIABA EL ESTADO , ESTONCES ERA PORQUE NO ESTABA USANDO LA FUNCION QUE EN SI ME ACTUALIZA EL ESTADO QUE ES SETCategories y esa debo usarla de esta forma como se ve  en la funcion y pasarle el ...categories como arreglo al setcategories en la funcion que me actualiza el estado
    //?una forma de hacerlo que esa fue que hice
    //setCategories([...categories,'Valorant'] );
    //copia de las categoria ..categories y agrego la nueva valorant
    //? la otra es esta con un callback que es mejor hacerlo asi
   
  //para ponerlo primero el valor y despues los otros seria asi:
  //setCategories((cat) => [ "Valorant",...cat]);
  



  //? entonces lo que haremos es la condicion 
  //tomar una sencilla ver s la caterories incluye el new categorie y si lo oncluye return y se sale
  //si la categiria ya existe no haga nada y si no existe lo va a insertar 
  if(categories.includes(newCategory))return;
  setCategories([newCategory, ...categories])//y si no existe repetida aqui lo insertara 


};
  return (
    <>
      {/**se devidira en 3 partes
       * 1-titulo
       * 2-introducir algoun input que seria un comonete aparte para el funcionamiento
       * 3-listado de gif p card , y dentor de eso tendrmeoa un gif iteam
       *
       */}

      {/*titulo*/}

      <h1>GifExpertApp</h1>
      {/**Input enves de agregar de una el input aqui lo haremos con un componete que tenga eseinput  */}
      <AddCategory 
      
      onNewCategory={(value)=>onAddCategory(value)}
      //setCategories={setCategories}
      //la idea va ser 
      />   
{/**mandar directamente la referenica de la funcion  */}
      {/*listado de gif */}
  {/*<button onClick={onAddCategory}>Agregar </button>*/}
      {/*si necesito renderizar basados las categorias como hago*/}

     
       { /** 
        * mandarle al addcategory mandarle una nueva propiedad en cual sea todas las categorias existentes colo lo imita cuando no existe en el arreglo
        *   pero tendriamo que decirle a add categorie cual es la propiedad y la nueva categoria porqur lo unico que hace esto es emitir una nueva categoria ose emite cuando el input le da enter 
        * 
        * 
        * valiadarlo podriamos decor de currentCategories={categories}// lo destructuramos y tenemos la cetegoria es totalmente permitito
        * pero es mejor que el comonente emita el nuevo valor y antes de insertar cumpla esa condicion 
        * 
        * 
        * 
        * 
        * NECESAITREMOS UN COMPONENTE QUE SE ENCARGUE UNICAMENTE DE MOSTRAR UNA CATEGORIA  
       */}

        {/**REGRESAR EL OBJETO SI EL RETURN Y ASI COMO ESTA  SI EN RETURN Y SOLO LOS PARENTESIS */}
        {
        
        categories.map((category) => (

              <GifGrid 
              key={category} 
              category={category}
              />  //este es el componente y es mas facil

        ))
         
          // (
          // <div key={category}>
          //    <h3> {category}</h3>
          //    <li > {category} </li>

          // </div>
        
          
          // )
          
       
        
        }
        {/* <li></li>
    <li></li>
    <li></li>
    <li></li> */}
   
    </>
  );
};

