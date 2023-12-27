const log = console.log

const ex_01 = () => {
    const foo = (p) => { p = { v: 2 }; };
    let a = { v: 1 };
    // var a = { v: 1 };
    foo(a);
    log(1, a);
}

const ex_02 = () => {
    const foo = (p) => { p.v = 2 };
    var a = { v: 1 };
    foo(a);
    log(2, a);
}

const ex_03 = () => {
    const foo = (p) => { p = [9,9,9,0]; };
    let a = [2,4,3,1];
    foo(a);
    log(3, a);
}

const ex_04 = () => {
    const foo = (p) => { p[0] = 666; };
    let a = [2,4,3,1];
    foo(a);
    log(4, a);
}

const ex_05 = () => {
    const foo = (p) => { ++p[0]; };
    let a = [2,4,3,1];
    foo(a);
    log(5, a);
}

const ex_06 = () => {
    const foo = (p) => { p.sort(); };
    let a = [2,4,3,1];
    foo(a);
    log(6, a);
}

const ex_07 = () => {
    const foo = (p, q) => { p = 1_000; q.a = p; };
    let a = 555, b = { a: a }
    log(7, a, b);
    foo(a, b);
    log(7, a, b);
}

const ex_08 = () => {
    const foo = (p, q) => { p = 1_000; q = { a: p }; };
    let a = 555, b = { a: a }
    log(8, a, b);
    foo(a, b);
    log(8, a, b);
}

const ex_09 = () => {
    let a = { a : 123 }, b = null;
    b = a;
    b['a']++;
    log(9, a, b); // обе поменялись
}

ex_01()
ex_02()
ex_03()
ex_04()
ex_05()
ex_06()
ex_07()
ex_08()
ex_09()
