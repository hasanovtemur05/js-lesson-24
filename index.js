// 81 - masala   ////   Berilgan stringdagi yagona (takrorlanmaydigan) so'zlarni toping.
function uniqueWords(s) {
    let words = s.split(" ")
    let wordCount = {}
    words.forEach(item => {
        wordCount[item] = (wordCount[item] || 0) + 1
    })
    let result = words.filter(item => wordCount[item] === 1)
    console.log(result);
}
// uniqueWords("this is a test this is only a test"); // Output: ["only"]
// uniqueWords("hello world hello"); // Output: ["world"]



// 82 - masala    ////    Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.
function deepestValue(obj) {
    let result = null
    let total = 0
    let arr = [{value: obj, step: 1}]
    for(let i = 0; i < arr.length; i++){
        let {value, step} = arr[i]
        for(let key in value){
            if (typeof value[key] === "object") {
                arr.push({value: value[key], step: step + 1})
            }else if(step > total){
                total = step
                result = value[key]
            }
        }
    }
    console.log(result);
}
const obj = {
  a: 1,
  b: {
      c: 2,
      d: {
          e: 3,
          f: {
              g: 4
          }
      }
  }
};
// deepestValue(obj); // Output: 4




// 83 - masala    ////    Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.
function swapFirstLast(s) {
    let words = s.split(' ');
    let swappedWords = words.map(item => {
        if (item.length > 1) {
            return item[item.length - 1] + item.slice(1, -1) + item[0];
        }
    });
    return swappedWords.join(' ');
}
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"




// 84 - masala    ////     Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.
function indexOfMax(arr) {
    let maxIndex = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i
        }
    }
    console.log(maxIndex);
}
// indexOfMax([1, 3, 7, 1, 2, 5, 7]); // Output: 2





// 85 - masala   ////    Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.
function sqrtElements(arr) {
    arr.forEach((item) => console.log(Math.sqrt(item)))
}
 // Test case
// sqrtElements([1, 4, 9, 16, 25]); // Output: [1, 2, 3, 4, 5]




// 86 - masala    ////     Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.
function separateEvenOdd(arr) {
    let even = []
    let odd = []
    arr.forEach((item) => {
        if (item % 2 == 0) {
            even.push(item)
        }else{
            odd.push(item)
        }
    })
    console.log({even, odd});
}

// separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }




// 87 - masala    ////    Berilgan raqamlar ro'yxatidagi tub sonlarni toping.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findPrimeNumbers(arr) {
    return arr.filter(isPrime);
}
// console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]





// 88 - masala    ////     Berilgan raqamlar ro'yxatidagi barcha elementlarni k qadam bosib aylanma tartibda o'ngga suring.
function rotateArray(arr, k) {
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
}
// Test case
// rotateArray([1, 2, 3, 4, 5], 2); // Output: [4, 5, 1, 2, 3]




// 89 - masala    ////     Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.
function trimmedMean(arr) {
   arr.sort((a,b)=> a - b)
   let res = arr.slice(2, -2)
   let count = 0
   for(let i = 0; i < res.length; i++){
     count += res[i]
   }
   console.log(count / res.length);
}
// Test case
// trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: 5.5




// 90 - masala    ////     Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.

function findPalindromes(arr) {
    let result = []
   arr.forEach(item => {
        let res = +item.toString().split("").reverse().join("")
        if (res == item) {
            result.push(item)
        }
   })
   console.log(result);
}
// Test case
// findPalindromes([121, 123, 202, 345, 454]); // Output: [121, 202, 454]






// 91 - masala    ////     Berilgan raqamlar ro'yxatidagi hamma elementlar bir xil qiymatga ega ekanligini tekshiring.
function allElementsEqual(arr) {
    let firstElement = arr[0];
    console.log(arr.every(element => element === firstElement));
}

// Test case
// allElementsEqual([1, 1, 1, 1]); // Output: true
// allElementsEqual([1, 2, 1, 1]); // Output: false




// 92 - masala    ////    Berilgan ikkita ro'yxatning bir xil elementlarni o'z ichiga olishini tekshiring, tartibini hisobga olmasdan.
function arraysHaveSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log(false);
    }
    arr1 = arr1.slice().sort();
    arr2 = arr2.slice().sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(false);
        }
    }

    console.log(true);
}
// arraysHaveSameElements([1, 2, 3], [3, 2, 1]); // Output: true    
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false




// 93 - masala   ////     Berilgan raqamlar ro'yxatidagi elementlarning to'plam (duplikat bo'lmasligi) bo'lishini tekshiring.
function isUniqueSet(arr) {
    let result = new Set(arr);
    console.log(result.size === arr.length);
}
// isUniqueSet([1, 2, 3, 4]); // Output: true
// isUniqueSet([1, 2, 3, 3]); // Output: false




// 94 - masala    ////     Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.
function hasThreeConsecutiveEvenOrOdd(arr) {
    if (arr.length < 3) {
        return false;
    }

    for (let i = 0; i <= arr.length - 3; i++) {
        const first = arr[i];
        const second = arr[i + 1];
        const third = arr[i + 2];
        
        if ((first % 2 === second % 2 && second % 2 === third % 2)) {
            return true; 
        }
    }
    return false; 
}

// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true




// 95 - masala    ////      Berilgan raqamlar ro'yxatidagi elementlar ketma-ket o'sib yoki kamayib borayotganini tekshiring.
function isMonotonic(arr) {
    if (arr.length < 2) {
        return true; 
    }
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            decreasing = false;
        } else if (arr[i] < arr[i - 1]) {
            increasing = false;
        }
    }

    return increasing || decreasing;
}

// Test case
// console.log(isMonotonic([1, 2, 2, 3])); // Output: true
// console.log(isMonotonic([6, 5, 4, 4]) );// Output: true
// console.log(isMonotonic([1, 3, 2]));// Output: false






 




