//1
// const user = {
//   name: "Ivan",
//   hobby: "reading",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

//2
// const user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
// };
// function countProps(obj) {
//   return Object.keys(obj).length;
// }
// console.log(countProps(user));

//3
// const teem = {
//   ivan: 74,
//   max: 66,
//   fin: 53,
//   Oleg: 23,
// };
// function findBestEmployee(employees) {
//   const values = Object.values(employees);
//   const name = Object.keys(employees);
//   let findNAme = "";
//   let maxTasks = 0;
//   for (const kay of name) {
//     if (employees[kay] > maxTasks) {
//       maxTasks = employees[kay];
//       findNAme = kay;
//     }
//   }
//   return `${findNAme}: ${maxTasks}`;
// }
// console.log(findBestEmployee(teem));

//4
// const sallery = {
//   fir: 100,
//   fog: 2430,
//   fiv: 1000,
//   fran: 4412,
//   wincs: 3123,
// };
// function countTotalSalary(employees) {
//   let total = 0;
//   const value = Object.values(employees);
//   for (const price of value) {
//     total += price;
//   }
//   return total;
// }
// console.log(countTotalSalary(sallery));
// const value = Object.values(sallery);
// const result = value.reduce(
//   (acc, item) => acc + item,
//   0
// );
// console.log(result);

//5
// function getAllPropValues(arr, prop) {
//   let newArray = [];
//   for (const item of arr) {
//     if (prop in item) {
//       newArray.push(item[prop]);
//     }
//   }
//   return newArray;
// }
// const products = [
//   {
//     name: "Apple",
//     price: 50,
//     category: "Fruits",
//   },
//   {
//     name: "Carrot",
//     price: 20,
//     category: "Vegetables",
//   },
//   {
//     name: "Banana",
//     price: 30,
//     category: "Fruits",
//   },
//   {
//     name: "Potato",
//     price: 15,
//     category: "Vegetables",
//   },
// ];

// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "price"));
// console.log(
//   getAllPropValues(products, "category")
// );
//6
// const products = [
//   { name: "мондорін", price: 10, quantity: 5 },
//   { name: "банан", price: 5, quantity: 10 },
//   { name: "яблуко", price: 10, quantity: 3 },
// ];
// function calculateTotalPrice(
//   allProducts,
//   productName
// ) {
//   let totalPrice = 0;
//   for (const product of allProducts) {
//     if (product.name === productName) {
//       totalPrice +=
//         product.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }
// const totalApplePrice = calculateTotalPrice(
//   products,
//   "яблуко"
// );
// console.log(totalApplePrice);
