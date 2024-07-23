/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy
*/

const ex_1 = () => { // Grouping Object.groupBy
    // const grouped = Object.groupBy(employees, (x) => x['department']);
    const grouped = Object.groupBy(employees, x => x.department);
    // const grouped = Object.groupBy(employees, ({department}) => department);
    console.log(JSON.stringify(grouped, null, 4));
}

const ex_2 = () => { // Grouping Map.groupBy
    const array = new Array(10).fill(0).map((v,i)=>i+1);
    console.log(array);

    const result = Map.groupBy(array, x => x%2==0? 'even': 'odd');
    console.log(result);
    console.log(typeof result);
    console.log(result.get('even'));
    const obj = Object.fromEntries(result);
    // console.log(JSON.stringify(obj, null, '\t'));
    console.log(JSON.stringify(obj, null, 4));
}

const ex_3 = () => { // Grouping Map.groupBy
    const result = Map.groupBy(employees, x => x.rate > 5? 'first': 'second');
    console.log(result);
    console.log('typeof =>', typeof result);
    console.log('first =>', result.get('first'));
    const obj = Object.fromEntries(result);
    console.log(JSON.stringify(obj, null, 4));
}

const employees = [
    { name: 'Ваня', department: 'PR', rate: 8 },
    { name: 'Коля', department: 'QA', rate: 5 },
    { name: 'Маша', department: 'PR', rate: 7 },
];

// ex_1();
// ex_2();
ex_3();