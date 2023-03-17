async function findMax(arr) {
    let max = 0;
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }

        }
        return max;

    }
    throw new Error("khong phai mang")
}

async function find() {
    try {
        let check = await findMax(1);
        console.log(check)
    } catch (er) {
        console.log(er.message)
    }


}

find()



