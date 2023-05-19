function sorting(arr) {
    arr.sort((a, b) => a - b);
    let result = [];   
    for (let i = 0; i < arr.length; i++) {
        let last = arr.pop();  
        let first = arr.shift();
        result.push(last);
        result.push(first);
    }
    result.push(arr.pop());
    result.push(arr.shift());
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
/* */