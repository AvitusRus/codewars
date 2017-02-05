
//  Функция принимает строку со значением числа. 
// Необходимо вычислить площадь для каждой цифры в строке
// и вернуть снова строку 

function squareDigits(num) {
  var number;
  number = num.toString().split('');
  var square = number.map(function(x) {
    return x * x;
  });

  var finalResult = parseInt(square.join(''), 10);

  return finalResult;

}

//
// You need to write a function that reverses the words in a given string.
// A word can also fit an empty string. If this is not clear enough, here are 
//some examples: 
// reverse('Hello World') === 'World Hello'
//

function reverse(string){
var newString = string.split(' ').reverse().join(" ");
return newString;
}

// You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20


function positiveSum(arr) {
    var positiveArray = arr.filter(function (x) {
        return x > 0;
    });

    var result = positiveArray.reduce(function (a, b) {
        return a + b;
    },0);

    return result;

}

// You have to return the digits of this number within an array in reverse order.
// 348597 => [7,9,5,8,4,3]
//

function digitize(n) {
    var converter =  n.toString().split('').reverse().join(",");
    var result = converter.split(',').map(Number);
    return result;

}

console.log(digitize(13253));

// best practice 

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

// count elements in array

function countSheeps(arrayOfSheep) {
   var filteredArray = arrayOfSheep.filter(function (x) {
       return x == true;
   });
   var result = filteredArray.length;
   alert("There are " + result + " sheeps in total");
}

var arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, null, undefined];

countSheeps(arrayOfSheep);

// best practice

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// найди индекс искомого элемента, вывести в строку

function findNeedle(haystack) {
var result = haystack.indexOf('needle');
return 'found the needle at position ' + result;
}

// best practice 

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// принять массив. Отбросить минимальное и максимальное значение. 
// вычислить сумму оставшихся элементов. Реализовать проверки.
// Не должен быть пустым, равным нулю и т.д. Возвращать ноль. 

function sumArray(array) {

    if ((array == null) && (array == 0) && (array.length == 1)) {
        return 0;
    } else {

        var sortedArray = array.sort(function (a,b) {
            return a - b;
        });
        var sliceArray = sortedArray.slice(1,-1);

        var result = sliceArray.reduce(function (a, b) {
            return a + b;
        },0);

        return result;
    }

}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([null]));
console.log(sumArray([0]));
console.log(sumArray([5]));

// best practice

function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

// function make negative numbers 

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// Create a function with two arguments that will return a list of length (n) 
// with multiples of (x).
//

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

//countBy(1,10); //=== [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5); //=== [2,4,6,8,10]

console.log(countBy(1,10));
console.log(countBy(2,5));