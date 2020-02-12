function add() {
    var text = '4,4';
    var number = JSON.parse("[" + text + "]");
    if (number.length > 2){
        console.log("giới hạn 2 số");
    } else {
        console.log(number.reduce((a, b) => a + b));
    }
}
add();
