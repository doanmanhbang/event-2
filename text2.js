function add() {
    var text = '1\n2,3';
    var arr =text.split(/[\s,]+/);
    console.log(arr);
    var number = JSON.parse("[" + arr + "]");
    console.log(number);
    console.log(number.reduce((a, b) => a + b));
}
add();
