//import React from 'react'
//podriamos mandarlo por la props o ien destructurar y mandar image
export const GifIteam = ({title,url,id}) => {
//  console.log(image) ya me saldria directamente los id de todas las imagenes y la infor pero en este casi le mandare title y la url
//console.log({title, url})no dice undefined porque no le estamos pasando nada enotonces en el componente  gifGird hay que hacer algo mas para que me traiga lo que quiero bien 
console.log({title, url,id})//aqui ua lo obyenems bien porque le estamos pasando al componente en gifGrid la spropoedades que necesito en este componente 
    return (
    <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
    </div>
  )
}
