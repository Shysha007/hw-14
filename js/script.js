function padString(str, num, symbol, arg4 = true){
    if (typeof str !== `string`) return 'str не строка';
    if (typeof num !== `number` && isNaN(num) || typeof num === `boolean`) return `Длина строки  не число`;
    if (str.length >= num) return str.substring(0,num)
    if (!symbol || (typeof symbol !== `string` && symbol.length !== 1)) return `Некорректный символ`;
    if (typeof arg4 !== `boolean`) return `Некорректный аргумент`;

        for (let i = str.length; i < num; i++) {
            if (arg4) {
                str += symbol;
                } 
                 else {
                str = symbol + str;
                }
        }  
            return str
}

console.log(padString(`hello`, 8, `*`));
console.log(padString(`hello`, 6, `*`, false));
console.log(padString(`hello`, 2));
console.log(padString(`hello`, `*`, false));
console.log(padString(`hello`, 6, false));
console.log(padString(`hello`,false));
console.log(padString(6, `*`, false));

