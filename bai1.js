let axios = require(`axios`);
function getAPI(){
    return new Promise(resolve => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then((data)=>{
            console.log(data.data)
        })
    })
}

getAPI()