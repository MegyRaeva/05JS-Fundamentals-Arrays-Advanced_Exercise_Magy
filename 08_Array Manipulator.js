function arrayManipulator(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let event = [];
        event = arr2[i].split(' ');
        let command = event[0];

        switch (command) {
            case "add":
                let index = Number(event[1]);
                let elementAdd = Number(event[2]);
                arr1.splice(index, 0, elementAdd); break;

            case "addMany":
                let index1 = Number(event[1]);
                let elementMany = event.slice(2);
                for (let j = 0; j < elementMany.length; j++) {
                    let manyAdd = Number(elementMany[j]);
                    arr1.splice(index1 + j, 0, manyAdd);
                }
                break;

            case "contains":
                let findNum = Number(event[1]);
                if (arr1.includes(findNum)) { console.log(arr1.indexOf(findNum)); }
                else { console.log(-1); } break;

            case "remove":
                let index2 = Number(event[1]);
                arr1.splice(index2, 1); break;

            case "shift":
                let posicion = Number(event[1]);
                for (let l = 0; l < posicion; l++) {
                    let last = Number(arr1.shift());
                    arr1.push(last);
                } break;

            case "sumPairs":
                let sumArr = [];
                if (arr1.length % 2 !== 0) {
                    arr1.push(0);
                }
                for (let m = 0; m < arr1.length; m += 2) {
                    let sum = 0;
                    sum += arr1[m] + arr1[m + 1];
                    sumArr.push(sum);
                }
                arr1 = sumArr;
                sumArr = [];        
                break;

            case "print":
                let print = "";
                for (let n = 0; n < arr1.length - 1; n++) {
                    print += `${arr1[n]}${', '}`
                }
                console.log(`${`[ `}${print}${arr1[arr1.length - 1]}${` ]`}`);
                break;

            default: break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log(".......................................");
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
console.log("..................................................");
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
console.log("..............................");
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
