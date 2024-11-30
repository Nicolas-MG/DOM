//----- async and await -------// 
async function fechData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

function peticionget(method, Url, data) {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Solo añade el cuerpo si el método no es GET 
    if (method !== "GET") {
    options.body = JSON.stringify(data); 
    } 
    
    return fetch(Url, options) 
        .then((response) => {
            if (!response.ok) { 
                throw new Error("Error en la respuesta: " + response.statusText); 
             } 
             return response.json();
             });
}
async function fechPost(){
    const responseDta = await
    peticionget("GET",
        "https://rickandmortyapi.com/api/character"
    )
}


buton.addEventlistener("click",fechPost);
