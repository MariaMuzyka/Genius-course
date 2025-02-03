//Lesson 2

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

//const value = 1;
//console.log(value > 0);
//console.log(value < 0);

//const value = 0;
//console.log(value > 0);
//console.log(value < 0);

//const value = -3;
//console.log(value > 0);
//console.log(value < 0);

// Якщо змінна ="test" - виведіть true,

//const value = "test";
//console.log(value === "test");

//Перевірте це на варіантах 'test',"qwerty", true

//const value = "qwerty";
//console.log(value === "qwerty");

//const value = "true";
//console.log(value === "true");

// Якщо змінна більше 10 - відніміть 5,

//const value = 1;
//if (value > 10 ){
// console.log(value - 5);
//}
//менше - додайте 5, результат виведіть в консоль
//else if (value<10) {
//  console.log(value + 5);
//}

//Перевірте це на варіантах 1, 10, 13.

//const value = 10;
//if (value > 10 ){//
//console.log(value - 5);
//}
//менше - додайте 5, результат виведіть в консоль
//else if (value<10) {
//  console.log(value + 5);
//}

// const value = 13;
// if (value > 10 ){
//   console.log(value - 5);
// }
// //менше - додайте 5, результат виведіть в консоль
// else if (value<10) {
//   console.log(value + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12

// const value = parseInt(prompt("Введіть число від 1 до 12"));
// // виведіть місяць який дорівнює числу
// if(value === 1 ){
//   console.log("Січень");
// }else if (value === 2) {
//   console.log("Лютий");
// }
// else if (value=== 3) {
//   console.log("Березень");
// }
// else if (value=== 4) {
//   console.log("Квітень");
// }
// else if (value=== 5) {
//   console.log("Травень");
// }
// else if (value=== 6) {
//   console.log("Червень");
// }
// else if (value=== 7) {
//   console.log("Липень");
// }
// else if (value=== 8) {
//   console.log("Серпень");
// }
// else if (value=== 9) {
//   console.log("Вересень");
// }
// else if (value=== 10) {
//   console.log("Жовтень");
// }
// else if (value=== 11) {
//   console.log("Листопад");
// }
// else if (value=== 12) {
//   console.log("Грудень");
// }
// else {
//   console.log("Значення не вірне!!!")
// }
//Зробіть сервіс який отримує тризначне число
// Запитуємо тризначне число у користувача
// const number = prompt("Введіть тризначне число (100 - 999):");

// // Перевірка на коректність вводу
// if (number >= 100 && number <= 999) {
//   // Розбиваємо число на цифри
//   const firstDigit = Math.floor(number / 100);          // Сотні
//   const secondDigit = Math.floor((number % 100) / 10);  // Десятки
//   const thirdDigit = number % 10;                      // Одиниці

//   // Обчислюємо суму цифр
//   const sum = firstDigit + secondDigit + thirdDigit;

//   // Виводимо результат користувачу
//   console.log(`Сума цифр числа ${number} дорівнює ${sum}.`);
// } else {
//   // Повідомлення про некоректний ввід
//   console.log("Будь ласка, введіть коректне тризначне число (від 100 до 999).");
// }

//Lesson 3
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [

// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },

// ];

// const names= fruts.map(fruit=>fruit.name);
// console.log(names);

// -- 2 --

//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// -- 3 --

//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {

// console.log( `цифра ${i}!` );

// }

// let i = 0;
// while (i < 5) { // показується 0, далі 1, потім 2
// console.log( `цифра ${i}` );
// i++;
// }
// -- 4 --

//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,

// більше за 100, або не скасує ввід/введе порожній рядок.
// let number;

// do {
//     number = prompt("Введіть число більше за 100:");
//     if (number === null) {
//         // Перевіряємо, чи користувач натиснув "Скасувати"
//         alert("Ввід скасовано.");
//         break;
//     }
// } while (number <= 100 || isNaN(number))

// if (number !== null) {
//     alert("Дякуємо! Ви ввели число: " + number);
// }

// -- 5 --

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// // Витягуємо вік усіх дівчат
// const girlsage = girls.map(girl => girl.age);

// // Обчислюємо суму віків
// const sum = girlsage.reduce((acc, age) => acc + age, 0);

// // Обчислюємо середній вік
// const averageAge = sum / girlsage.length;

// console.log(averageAge);

// Lesson 4

// ---1---

// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {

// if (age > 18) {
// return true;
// } else {

// return confirm('Батьки дозволили?');

// }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?') || false;
// }

// ---2---

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function minNumber(a, b) {
//  if (a<b){
//   return a;
//  }
//   return b;
//  }
// minNumber(2, 7);
// console.log(minNumber(2, 7));

// ---3---

// Перепишіть з використанням стрілкових функцій

// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );

// Lesson 5

// --1--

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній

// бал і кількість пропущених занять

// const studInfo =  {
//   name:"",
//   speciality:"",
//   mediummark: "",
//   missedclasses:"",

// // 2) написати метод який буде виводити цю інформацію
//   showInfo: function () {
//    console.log("Student's"+ " name:"+ this.name + ", speciality:" + this.speciality + ", mediummark:" + this.mediummark + ", missedclasses:" + this.missedclasses );
//   }
// }
// // 3) написати три варіанти студентів
// const student1 = {
//   name:"Bohdan",
//   speciality:"math",
//   mediummark: "9",
//   missedclasses:"2"
// }

// const student2 = {
//   name:"Khrystya",
//   speciality:"literature",
//   mediummark: "11",
//   missedclasses:"2"
// }

// const student3 = {
//   name:"Mary",
//   speciality:"English",
//   mediummark: "11",
//   missedclasses:"3"
// }

// // 4) прикріпити знначення за допомогою call apply bind
// studInfo.showInfo.bind(student2 )();
// studInfo.showInfo.call(student3);
// studInfo.showInfo.apply(student1);

// --2--

// Написати дві кнопки і закріпити на них функції

// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function infoAdd() {
//     document.querySelector("#html").addEventListener("click", function (){
//       alert("main background")});

//     document.querySelector("#css").addEventListener("click", function (){
//       alert("create styles ")});

//   }

// infoAdd();

// --3--

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару

// const prodInfo =  {
//   name:"",
//   price:"",
//   number: "",
//   showInfo: function () {
//    console.log("Product's"+ " name:"+ this.name + ", price:" + this.price + ", number:" + this.number);
//   }

//   // функція має повертати назву товару і вартість

// // перевірити на варіантах:

// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4
// }
// const prod1 = {
//   name:"banana",
//   price:"30",
//   number: "4,5",
// }

// const prod2 = {
//   name:"cherry",
//   price:"58",
//   number: "1,3",
// }

// const prod3 = {
//   name:"orange",
//   price:"89",
//   number: "3,4",
// }

// prodInfo.showInfo.bind(prod2)();
// prodInfo.showInfo.call(prod1);
// prodInfo.showInfo.apply(prod3);

// Lesson  6
// Створити телефонну книгу
// 1.створити початковий клас Abonent, де зберігатимуться ім*я і номер
// 2.створити set який прийматиме телефон і номер
// 3.створити get який виводитиме данні про абонента
// 4.творити три різних юзери
// 5.вивести данні

// // 1. Create the initial Abonent class
// class Abonent {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//   }
// }

// // 2. Create a Set to store abonents
// const phoneBook = new Set();

// // 3. Function to add an abonent
// function addAbonent(name, phone) {
//   const abonent = new Abonent(name, phone);
//   phoneBook.add(abonent);
// }

// // 4. Create three different users
// addAbonent("Olena", "123-456-789");
// addAbonent("Ivan", "987-654-321");
// addAbonent("Maria", "555-777-888");

// // 5. Function to display all abonents
// function displayPhoneBook() {
//   console.log("Phone Book:");
//   phoneBook.forEach((abonent) => {
//     console.log(`Name: ${abonent.name}, Phone: ${abonent.phone}`);
//   });
// }

// // Display the phone book
// displayPhoneBook();

// Lesson  7
// task 1
// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display= "none";
//   }

//   show() {
//     this.$el.style.display= "block";
//   }
// }

// class CircleItem extends CircleBox{
//   constructor(options){
//     super(options.selector);
//     this.$el.style.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50%";
//     this.$el.style.background = options.color;
//   }
// }

// const CircleRed = new CircleItem({
//   selector: "#CircleRed",
//   color:"red",
//   size: 30
// });

// const CircleGreen = new CircleItem({
//   selector: "#CircleGreen",
//   color:"green",
//   size: 60
// });

// const CircleBlack = new CircleItem({
//   selector: "#CircleBlack",
//   color:"black",
//   size: 90
// });

// task 2

// function Car(name, color){
//   this.name = name;
//   this.color = color;
// }

// Car.prototype.message = function (){
//   console.log(`${this.name} is ${this.color}`);
// }
// Car.prototype.start = function() {
//   console.log(`${this.name} is started`);
// }

// const BMW = new Car("BMW", "red");
// const Opel = new Car("Opel", "green");

// task 3

// let message = {
//   messageHello(){
//     console.log(`Hello, ${this.name}`);
//   },
//   messageBye(){
//     console.log(`Bye, ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, message);

// new User("Ivan").messageHello();

// Домашнє завдання

// ----1----

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:

// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// class Calculator {
//   constructor() {
//     this.num1 = 0;
//     this.num2 = 0;
//   }

//   read() {
//     this.num1 = parseFloat(prompt("введіть число"));
//     this.num2 = parseFloat(prompt("введіть число"));
//   }
//   sum() {
//     return this.num1 + this.num2;
//   }
//   mul() {
//     return this.num1 * this.num2;
//   }
// }


// // usage
// const calculator = new Calculator();

// calculator.read(); // Prompt the user to enter two numbers
// alert(`Sum: ${calculator.sum()}`); // Display the sum
// alert(`Multiply: ${calculator.mul()}`); // Display the product


// Lesson 8

// Домашнє завдання

// // -----1-----

// // Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// // та прочитати його значення.

// const widgetElement = document.querySelector('[data-widget-name]');
  
//   // Читаємо значення атрибута data-widget-name
//   const widgetName = widgetElement.getAttribute('data-widget-name');
  
//   // Виводимо значення в консоль
//   console.log(widgetName);

// Lesson 9

// Домашнє завдання

// -----1----

// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.


//  const text = document.querySelector("button").addEventListener('click', ()=>{
//   document.getElementById("text").hidden = true;
//  });

// -----2----

// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const text = document.querySelector("button").addEventListener('click', function () {
// this.hidden = true;
// });

// -----3----

// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const text = document.querySelector("button").addEventListener('click', ()=>{
//   document.getElementById("text").hidden = true;
//  });

// document.querySelectorAll("#tree li").forEach((li) => {
//   li.addEventListener("click", (event) => {
//     const childUl = li.querySelector("ul");
//     if (childUl) {
//       childUl.hidden = !childUl.hidden;
//     }
//     event.stopPropagation();
//   });
// });

// Lesson 10

// Домашнє завдання встановити node.js


// Lesson 11

// Домашнє завдання встановити 2 бібліотеки


// Lesson 12
// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout


// function printNumbersInterval(from, to) {
//   let current = from;

//   const timerId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbersInterval(1, 5);

// function printNumbersTimeout(from, to) {
//   let current = from;

//   function printNext() {
//     console.log(current);
//     if (current < to) {
//       current++;
//       setTimeout(printNext, 1000);
//     }
//   }

//   printNext();
// }

// printNumbersTimeout(1, 5);




// -----2----

// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Приклад використання
delay(2000).then(() => console.log('Виконано через 2 секунди'));


// Lesson 13
// no hw
// Lesson 14

