
let axios = require(`axios`);
let count=0;
axios.get(`https://jsonplaceholder.typicode.com/todos`)
.then((data) => {
 let todos=data.data;
 todos.forEach((data)=>{
     if (data.completed==true){
         count++
     }
 })
    console.log(count)
})

let axios1 = require(`axios`);
let count1 = 0;

async function show() {
    let data = await axios1.get(`https://jsonplaceholder.typicode.com/todos`);
    let memory = data.data;
    memory.forEach((value) => {
        if (value.completed == true) {
            count1++;
        }

    })
    console.log(count1)
}

show();


