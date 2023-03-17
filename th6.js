let axios = require(`axios`);

async function getdata(number) {
    let data = await axios.get('http://jsonplaceholder.typicode.com/posts');
    let memori = data.data;
  return memori[number-1]
}

getdata(6).then(e => {
    console.log(e)
})