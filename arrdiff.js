function arrayDiff(a, b) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) <= -1) {
            result.push(a[i]);
        }
    }
    return console.log(result);
}
arrayDiff([1,2,3,4,5,6,7,8,9], [2,4,6,8]);
