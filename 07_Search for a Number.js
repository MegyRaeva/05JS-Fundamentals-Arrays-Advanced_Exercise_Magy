function searchNumber(arr1, arr2) {
    let lengthTake = arr2[0];
    let lengthDell = arr2[1];
    let numAs = arr2[2];
    let result = [];
    result = arr1.slice(0, lengthTake);
    result.splice(0, lengthDell);
    let count = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === numAs) { count++; }
    }
    console.log(`Number ${numAs} occurs ${count} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);