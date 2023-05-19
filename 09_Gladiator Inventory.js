function gladiatorInventory(arr) {

    let invenntory = arr[0].split(' ');
    for (let i = 1; i < arr.length; i++) {
        let event = arr[i].split(' ');
        for (let j = 0; j < event.length; j++) {
            let command = event[0];
            switch (command) {
                case "Buy":
                    let trainer = event[1];
                    if (!invenntory.includes(trainer)) { invenntory.push(trainer); } break;

                case "Trash":
                    let trainer1 = event[1];
                    if (invenntory.includes(trainer1)) {
                        let dellTrainer = invenntory.indexOf(trainer1);
                        invenntory.splice(dellTrainer, 1)
                    }
                    break;
                case "Repair":
                    let trainer2 = event[1];
                    if (invenntory.includes(trainer2)) {
                        let repeirTrainer = invenntory.indexOf(trainer2);
                        invenntory.splice(repeirTrainer, 1)
                        invenntory.push(trainer2);
                    }
                    break;
                default: break;
            }
            if (command === "Upgrade") {
                let trainer3 = event[1].split('-');
                let upgrade = trainer3[0] + ":" + trainer3[1];
                if (invenntory.includes(trainer3[0])) {
                    let upgradeTrainer = invenntory.indexOf(trainer3[0]);
                    invenntory.splice(upgradeTrainer + 1, 0, upgrade);
                }
                break;
            }
        }
    }

    console.log(invenntory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
console.log("...........................");
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);