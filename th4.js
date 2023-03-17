let axios = require(`axios`);
function getData(){
    return new Promise(function (resolve){
        axios.get("http://jsonplaceholder.typicode.com/posts/1").then(function (json){
            resolve(json.data);
        })

    })
}
getData().then(result=>{
    console.log(result)
})

