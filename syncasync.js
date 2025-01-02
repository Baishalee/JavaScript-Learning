//Synchronous function -->
//Example:
// function hello() {
//     console.log("hello");
// };

//Example:
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");

//Asynchronous function -->
//Example:
// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000)   // timeout: 2sec = 2000msec 

//Example:
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

//Callback function -->
//Example:
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, sum);

//Example:
// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// //Callback hell --> (to resolve this problem we use promises)
// getData(1, () => {
//     console.log("getting data 2....")
//     getData(2, () => {
//         console.log("getting data 3....")
//         getData(3, () => {
//             console.log("getting data 4....")
//             getData(4);
//         });
//     });
// });

//Promise -->
//Example:
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");

//     resolve("success");
//     reject("there is an error");
// })

//Example:
// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// };

//.then() and .catch() -->
//Example:
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("success");
//         // reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("network problem", err);
// });

//Promise chain -->
//Example:
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data1....");          
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => { });
// });

//Example:                                     //Promise with callback hell
// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//         }, 2000);
//     });
// }

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

//Async-Await -->
//Example:
// async function hello() {                //Async
//     console.log("hello");
// }

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//         }, 2000);
//     });
// }

//Example:
// function api() {                //Await
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("200");
//         }, 2000);
//     });
// };

// async function getWeatherData() {
//     await api();  //1st
//     await api();  //2nd

// }

//Example:
// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//         }, 2000);
//     });
// }

// //Async-Await
// async function getAllData() {
//     await getData(1);  //1st
//     await getData(2);  //2nd
//     await getData(3);  //3rd

// }