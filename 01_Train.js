function train(arrIN) {
    let arr = arrIN.shift().split(' ').map(Number);
    let capacity = Number(arrIN.shift());
    for (let i = 0; i < arrIN.length; i++) {
        let command = arrIN[i].split(' ');
        let action = command[0];
        if (action === "Add") {
            arr.push(Number(command[1]))
        }
        else {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] + Number(command[0]) <= capacity) {
                    arr[j] += Number(command[0]); break;
                }
            }
        }
    }
    console.log(arr.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
