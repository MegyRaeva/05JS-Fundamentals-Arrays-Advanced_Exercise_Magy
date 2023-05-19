function bombNumbers(arr, arr1) {
    let bomb = arr1[0];
    let bombPower = arr1[1];
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === bomb) {
            let findBomb = arr.indexOf(bomb);
            arr.splice(findBomb + 1, bombPower);
            arr.splice((findBomb - bombPower), (bombPower + 1));
        }
    }
    for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log("........................");
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
console.log("........................");
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3] );
console.log("........................");
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1] );

