async function getDivision(a,b) {
    if (b!== 0) return a / b;
    return new Error("Math erro");
}
async function f(){
    try{
        let result=await getDivision(2,0);
        console.log(result);
    }catch (error){
        console.log(error);
    }
}
f();