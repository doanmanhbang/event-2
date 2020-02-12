function add(){
    var text = "//;\n1;2";
    var number = text.match(/\d/g);
    number = number.join(",");
    // nb = number.toString();
    var a =number.split(/[\s,]+/);
    var arr = JSON.parse("[" + a + "]");
    console.log(arr);
    if (a.length > 2) {
        console.log('chuoi co 2 so: ' + a);
    } else {
        var total = arr.reduce( (a, b) => a + b);
        console.log(total);
    }
}
add();
