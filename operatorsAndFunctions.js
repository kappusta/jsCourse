function canSmoke(age){
    if (age>=18){
        return true;
    }else {
        return false;
    }
}
console.log(canSmoke(15));

let fun = canSmoke(18);
console.log(fun);

let funThroughVar = function() {
    console.log(canSmoke(18));
    return canSmoke(18);
}
funThroughVar()

let arrowFunction = () => {
    console.log(canSmoke(21));
}
arrowFunction();

function addNum(a, b){
    c = a + b;
    console.log(c);
}
addNum(3, 2);

let summ = function(a, b){
   c = a * b; 
   console.log(c);
}
summ(3, 2);

let summ1 = () => {
    console.log(summ(4, 2));
}
summ1();

function addString (a, b){
    console.log("Hello"+"Dasha");
}
addString();

let summStr = function(a, b){
    c = a + b;
    console.log(c);
}
summStr("Hello", "Dasha");

let summStr1 = () => {
    console.log(summStr("Hello", "Helga"));
}
summStr1();