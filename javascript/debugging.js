function f1(a, b) {
    return [String(a), String(b)]
}

function f2(a, b) {
    var arr = f1(a, b);
    var sum1, sum2;
    sum1 = arr[0];
    sum2 = arr[1];

    return sum1 + sum2
}

document.querySelector("#calc").addEventListener("click", () => {
    var arr = [];    
    for (let i = 0; i < 15; i++) {
        var value = f2(i,i+2)
        console.log(value);
        arr.push(value);
    }
});

console.log(f2("omar", "olmedo"))