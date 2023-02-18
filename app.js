const getDadJoke = async () => {
    try{
        let joke = document.querySelector("#joke")
        let loading = document.querySelector("#loading")
        loading.style.display="";
        const configure = {headers : {Accept : "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/", configure)
        loading.style.display="none";   
        joke.innerText = res.data.joke
    }
    catch{
        let joke = document.querySelector("#joke")
        joke.innerText = "NO JOKES AVAILABLE !!! "
    }
} 
let button = document.querySelector("#newJoke")
button.addEventListener("click", getDadJoke)