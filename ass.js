function solve(arr) {
    let arrNum = arr.map(Number);
    let concreteDay = [];
    let totalConcrete = 0;
    let costs = 0;
    let crews = arrNum.filter(len => len < 30).length; // let crews = arrNum.length;
    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] !== 30) {
                arrNum[i]++;
                concreteByAllCrews += 195;
                if (arrNum[i] == 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        concreteDay.push(concreteByAllCrews);
    }
    costs = totalConcrete * 1900;
    console.log(concreteDay.join(", "));
    console.log(`${costs} pesos`);
}
solve([21, 25, 28]);