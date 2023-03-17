async function onMyBirthDayAsync(iskayosick){
    if (!iskayosick) return 2;
    throw  new Error("I am sad");
}

async function dosomethingAsync(){
    try {
        let result=await onMyBirthDayAsync(false);
        console.log(`I have ${result} cake`);
    }catch (error){
        console.log(error.message);
    }finally {
        console.log("party")
    }
}

dosomethingAsync();