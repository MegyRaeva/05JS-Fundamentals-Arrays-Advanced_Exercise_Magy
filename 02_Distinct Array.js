function distinctArray(arr)
{ 
    for (let i = 0; i < arr.length; i++) 
    {
        let element = arr[i];
        for (let j = i+1; j < arr.length; j++) 
        {
           
            if (element === arr[j]) 
            {
               arr.splice(j, 1)
            }            
        }
    }
    console.log(arr.join(' '));
}

//

function distinctArray1(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element)
        }
    }
    console.log(uniqueArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log(".................");
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
console.log(".................");
distinctArray([1, 2, 3, 4]);

console.log(".................");
distinctArray1([20, 8, 12, 13, 4, 4, 8, 5]);


