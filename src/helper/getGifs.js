export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=ZqnMxXUiVTNSJ4XzNPYgZahw8MhlsXoG&q=${ category }&limit=20`
    const resp= await fetch(url);
    const {data}=await resp.json();
    
    const gifs=data.map(img=>({
      id:img.id,
      title:img.title,
      url:img.images.downsized_medium.url
  
    }))
  
    //console.log(gifs)
    return gifs
   
      // yo se que esto es un arreglo por eso lo reccorro con map 
     
    //console.log(data)
  }
  
  