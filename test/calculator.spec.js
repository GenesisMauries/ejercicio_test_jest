const { add, resta, multiply, division } = require('../calculator');

describe ('Suma', () =>{
    test('suma de dos numeros', () => {
        expect(add(1,2)).toBe(3);
    });
    test('Deberia retornar 11 para recibe 5,6', () => {
        expect(add(5,6)).toBe(11);
    })
    test('Deberia retornar el mismo valor si solo paso un número', () => {
        expect(add(4)).toBe(4);
    })
    test('Deberia retornar 0 si no es pasado ningun número', () => {
        expect(add()).toBe(0);
    })
});
describe('Resta', ()=>{
    test('Deberia retornar la resta de dos números ', ()=>{
        expect(resta(5,1)).toBe(4);
    })
    test('Deberia retornar la resta de dos números parte II', ()=>{
        expect(resta(5,3)).toBe(2);
    })
    test('Deberia retornar 0 si no es pasado ningun número ', ()=>{
        expect(resta()).toBe(0);
    })
    test('Deberia retornar un número cuando solo se ingresa un parametro ', ()=>{
        expect(resta(5)).toBe(5);
    })
    test('Deberia retornar un numero negativo ', ()=>{
        expect(resta(-5,5)).toBe(-10);
    })
});
describe('Multiply', ()=>{
    test('Deberia retornar la multiplicacion de dos numeros', ()=>{
        expect(multiply(9,9)).toBe(81);
    })
});
describe('Division', () =>{
    test('Deberia retornar la division de dos numeros', () => {
        expect(division(10,2)).toBe(5);
    })
})