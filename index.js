const newArr = [];
function writeCards(names, event){
    for (let i = 0; i <names.length; i++) {

        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;

    }
    return newArr;
}

function countDown(){
    let number = 10;
    while (number >=0){
        console.log(number--);
        debugger;
    }
}
countDown(10);