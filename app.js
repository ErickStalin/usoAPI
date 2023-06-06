const cargarPeliculas = async () => {
    try{
        //fetch permite hacer peticiones a la base para ver si podemos conectarnos o no
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e8067cbde2e87cd074d67a886f151aa&language=es-MX')
    //fetch devulve una respuesta que no es instantaneo
    //await permite que la funcion sea pausada hasta obtener respuesta
    //async permite que una funion sea asincrona
    console.log(respuesta)
    const datos = await respuesta.json(); 
    console.log(datos)
    }catch(error){
        console.log(error)
    }
}

cargarPeliculas();