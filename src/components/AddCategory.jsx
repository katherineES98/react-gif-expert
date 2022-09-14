import React, { useState } from "react";

//enves de setCategories le mando onNewCategory
export const AddCategory = ({ onNewCategory }) => {
  /**cada componete puede tener su usestate su propios estados  */
  //en este caso necesitamos manejar el esrado del input
  const [inputValue, setInputValue] = useState('');
  //si el input value el valor que tiene que es one push quiero que tenga mi input por defecto entonces solo pongo en el input el value

  const onInputChange = ({ target }) => {
    //console.log(target.value)//el evento tiene muchas propiedades de que se disparo
    setInputValue(target.value); //esto es loq ue ocupamos para hacer el cambio en el input y veamos que al escirbir se imprime en la consola es decir esta cambiando su estado a darle event.target.value
    //pero enves de poner evento entonce los destructuro ({target}) y easi solo hago target.value
  };
  //? ahora quiero que andarle enter necesito ejecutar cierto codigo alli

  const onSubmit = (event) => {
    //console.log(event)
    //para evitar que se refresque el navegador seria :
    event.preventDefault();
    console.log(inputValue); //este es el que voy a mtener que enviar para actualizar la informacion en el padre
    /**validaciones  que se tiene que hacer  cuando editanos en el input seria */
    //si el input valio .trim es que elimino los espacios adelante y atras
    if (inputValue.trim().length <= 1) return;
    //solo es limpiando a la hora de hacer la evaluacion
    //teiene que haber al menos un carcater si eso se cumple puedo escrbir un return con el objetivo de salirse de la funcion y que no se siga ejecutando lo demas

    //volver a limpoar el input value para que tambien se limpie nuestra caja de texto

   // sera igual a un string vacio para eso asi limpiar
//cuando se escriba en el input 
    //setCategories((categories) => [...categories, inputValue]); //si nosotros le mandamos el input value  se inderta pero se pierde los demas datos
    //?ya no lalamaremos setCategories((categories) => [...categories, inputValue]); si no llamaremos onNewCategory y le pasaremos el valor del input seria bueno pasarle el que limpia osea el .trim 
    setInputValue(""); //
    onNewCategory(inputValue.trim())//elimina los espacios de atras y delante eso emite esto
    
   
    //entonces podemos mandarle un callback donde tendremos un callaback
    //que alli tendremos las categories todas las categorias anteriores y luego insertar el valor nuevo y despues el valor de las categories que estamamos pasando mediante la funcion
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />

      {/*si le ponemos un valor por defecto no podremos cambiarlo ni escribir en el entonces por eso es el error 
     que dice que probeimos la prosp del value y se mandaron pero no hay un onchage haddler osea que estamos realizando afuerza entonce tendriamos que usar onChange o bien tomarlo como un elemento readOnly
     para asegurarse que no se va a cambiar 


     entonces hacemos una funcion y ponemos el estado con hola mundo y llamanmos la funcion pero igual cambio el estado pero no puedo cambiarlo
     asi que vamos hacerlo como funcion y recordar que existe un evento y ese es el evento que le mandamos a la funcion 
     (event)=>{oninputChages(event)}
     */}
    </form>
  );
};
