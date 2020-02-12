function add(str) {
    var res = str.replace(/[\n,]/g," ");
    console.log(res);
    var arr = res.split(" ");
    var total = 0;
    for (var i =  0; i < arr.length; i++){
        total += Number(arr[i]);
}
    console.log(total);
}
add("30\n30,30");
