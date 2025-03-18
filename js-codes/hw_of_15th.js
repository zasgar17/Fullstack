// // 1. Salam Mesajı Çap Edin
// console.log("Salam, dünya!");
// alert("Salam, dünya!");

// // 2. İki Ədədi Toplayın (User Input)
// let num1 = Number(prompt("Birinci ədədi daxil edin:"));
// let num2 = Number(prompt("İkinci ədədi daxil edin:"));
// console.log(`Cəm: ${num1 + num2}`);
// alert(`Cəm: ${num1 + num2}`);

// // 3. Verilmiş Ədədi Kvadrata Yüksəldin (User Input)
// let num = Number(prompt("Ədədi daxil edin:"));
// console.log(`Kvadrat: ${num * num}`);
// alert(`Kvadrat: ${num * num}`);

// // 4. String-i Böyük Hərfə Çevirin (User Input)
// let text = prompt("Bir mətn daxil edin:");
// console.log(`Böyük hərflə: ${text.toUpperCase()}`);
// alert(`Böyük hərflə: ${text.toUpperCase()}`);

// // 5. Cüt və ya Tək Olduğunu Yoxlayın (User Input)
// let number = Number(prompt("Bir ədəd daxil edin:"));
// let isEven = number % 2 === 0;
// console.log(isEven ? "Cüt ədəddir." : "Tək ədəddir.");
// alert(isEven ? "Cüt ədəddir." : "Tək ədəddir.");

// // 6. String-i Tərsinə Çevirin (User Input)
// let str = prompt("Bir mətn daxil edin:");
// let reversedStr = str.split("").reverse().join("");
// console.log(`Tərsinə: ${reversedStr}`);
// alert(`Tərsinə: ${reversedStr}`);

// // 7. Array-da Ədədlərin Cəmini Tapın (User Input)
// let numsArray = prompt("Ədədləri vergüllə ayıraraq daxil edin:").split(",").map(Number);
// let sumArray = numsArray.reduce((sum, num) => sum + num, 0);
// console.log(`Cəm: ${sumArray}`);
// alert(`Cəm: ${sumArray}`);

// // 8. Verilmiş Array-da Ən Böyük Ədədi Tapın (User Input)
// let maxNum = Math.max(...numsArray);
// console.log(`Ən böyük ədəd: ${maxNum}`);
// alert(`Ən böyük ədəd: ${maxNum}`);

// // 9. 5-dən Böyük Ədədləri Filtrləyin (User Input)
// let filteredNums = numsArray.filter(num => num > 5);
// console.log(`5-dən böyük ədədlər: ${filteredNums.join(", ")}`);
// alert(`5-dən böyük ədədlər: ${filteredNums.join(", ")}`);

// // 10. Array-da String Uzunluqlarını Tapın (User Input)
// let strArray = prompt("Sözləri vergüllə ayıraraq daxil edin:").split(",");
// let lengths = strArray.map(str => str.length);
// console.log(`Söz uzunluqları: ${lengths.join(", ")}`);
// alert(`Söz uzunluqları: ${lengths.join(", ")}`);

// // 11. Verilmiş Ədədi Faktoriyala Yüksəldin (User Input)
// let factorialNum = Number(prompt("Ədədi daxil edin:"));
// let factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// console.log(`Faktorial: ${factorial(factorialNum)}`);
// alert(`Faktorial: ${factorial(factorialNum)}`);

// // 12. Array-da Olan Tək Ədədləri Çap Edin (User Input)
// let oddNums = numsArray.filter(num => num % 2 !== 0);
// console.log(`Tək ədədlər: ${oddNums.join(", ")}`);
// alert(`Tək ədədlər: ${oddNums.join(", ")}`);

// // 13. Array-dakı Ədədləri İkiqat Edin (User Input)
// let doubledNums = numsArray.map(num => num * 2);
// console.log(`İkiqat ədədlər: ${doubledNums.join(", ")}`);
// alert(`İkiqat ədədlər: ${doubledNums.join(", ")}`);

// // 14. Ədədi String Formatına Çevirin (User Input)
// let numToString = prompt("Bir ədəd daxil edin:");
// console.log(`String formatında: ${numToString.toString()}`);
// alert(`String formatında: ${numToString.toString()}`);

// // 15. Callback Funksiyası kimi setTimeout istifadə edin
// setTimeout(() => {
//     console.log("Gecikmiş mesaj!");
//     alert("Gecikmiş mesaj!");
// }, 2000); // 2 saniyə gecikmə ilə
