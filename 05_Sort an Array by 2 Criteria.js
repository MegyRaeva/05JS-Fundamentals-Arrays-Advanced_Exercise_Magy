function sort2Criteria(arr) {
    let result =  arr.sort((a, b) => { return a.length - b.length || a. localeCompare(b)});
    console.log(result.join(' \n'));
}

sort2Criteria(['alpha', 'beta', 'gamma']);
console.log("..................");
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);