let name1 = 'Dasha';
console.log(name1);

function reverseStr(){
    name2 = name1.split("").reverse().join("");
    console.log(name2);
}
reverseStr();

let name3 = 'Helga';
let newString = '';

function revStrbyLoop(str){
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
}
console.log(newString);
}
revStrbyLoop("Google");

let someName = 'sf26\.%%'
function elemNam(){
   nam = someName.length;
   console.log(nam);
}
elemNam();

function breakStr(){
    sp = someName.split("");
    console.log(sp);
}
breakStr();

console.log(sp[5]);
console.log(sp.reverse('').join(''));

nam1 = someName.charAt(4);
console.log(nam1);

let check = '';
function palindrome(pol) {
    let check = '';
    for (let i = pol.length-1; i >= 0; i--) {
      check += pol[i];
    }
    if (pol == check) {
      return true;
    } else {
      return false;
    }
  }
  console.log(palindrome('abbc'));

  console.log('НАСТУПНИЙ паліндром');

function palindrome3(str) {
  let check = '';
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}
console.log(palindrome('abbc'));

  function revEvenNum (arr){
    arrNew = arr.split('').reverse();
    return arrNew;
  }
  let mariaReverse = revEvenNum('maria');
  
console.log("____________");
console.log(mariaReverse);
  let check1 = '';
  function evenIterations(arrNew){
    for(let i = 1; i < arrNew.length; i++){
        if (i % 2 === 0){
            console.log(arrNew[i]);
        }
        else{
            console.log(NaN);
        }
    }
  }
    evenIterations(mariaReverse);

    console.log("ТЕЖ ПОЛІНДРОМ");

    function palindrome1(str) {
      return str.split('').reverse().join('') == str;
    }
    console.log(palindrome('34543'));
    console.log(palindrome('34544'));

    console.log("вивести в зворотньому порядку тільки парні числа з масиву");

    let getPaired = function getPairedNumbers(arr){
      reversed = arr.reverse();
      console.log(reversed);

      let resultElem = []
      for(let elem of reversed){
        if (elem%2==0){
          resultElem.push(elem);
        }
      }
      console.log(resultElem);
    }
      getPaired(new Array(1,2,3,4,5,6));