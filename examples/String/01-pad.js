/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
*/

const ex_01 = () => {
    const str1 = '5';

    console.log(str1.padStart(2, '0'));
    // Expected output: "05"

    const fullNumber = '2034399002125581';
    const last4Digits = fullNumber.slice(-4);
    const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

    console.log(maskedNumber);
    // Expected output: "************5581"

    console.log((32).toString(16).padStart(2, '0'))
    console.log(31..toString(16).padStart(2, '0'))
}

const ex_02 = () => {
    const str1 = 'Breaded Mushrooms';

    console.log(str1.padEnd(25, '.'));
    // Expected output: "Breaded Mushrooms........"

    const str2 = '200';

    console.log(str2.padEnd(5));
    // Expected output: "200  "
}

ex_01()
