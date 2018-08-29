const add = (a,b) => {
    if(!a && !b){
        return 0;
    }
    return (!b && a) || a + b;
}
const resta = (a,b) => {
    if(!a && !b){
        return 0;
    }
    return (!b && a ) || a - b;
}
const multiply = (a,b) =>{
    return a * b;
}
const division = (a,b) =>{
    return a / b ;
}
module.exports = {
    add,
    resta,
    multiply,
    division
}