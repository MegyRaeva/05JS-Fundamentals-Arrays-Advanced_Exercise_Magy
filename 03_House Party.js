function houseParty(arr) {
    let guest = [];
    for (let i = 0; i < arr.length; i++) {
        let event = [];
        event = arr[i].split(' ');

        let name = event[0];
        let action = event[2];

        switch (action) {
            case "going!":
                if (guest.includes(name)) { console.log(`${name} is already in the list!`); }
                else { guest.push(name); }
                break;

            case "not":
                if (guest.includes(name)) {
                    for (let m = 0; m < guest.length; m++) {
                        if (guest[m] === name) { guest.splice(m, 1) }
                    }
                    /*може let index = guest.indexOf(name); guest.slpace(index, 1) */
                }
                else { console.log(`${name} is not in the list!`); }
                break;

            default: break;
        }
    }
    for (const pople of guest) { console.log(pople); }
}
houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']);
console.log("..................................");
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'] );