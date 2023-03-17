let axios = require(`axios`);
async function getAPI(number){
    let data= await axios.get("https://jsonplaceholder.typicode.com/users");
    let dataApi=data.data;
   return dataApi[number];

}
getAPI(5).then((value)=>{
    console.log(value)
})