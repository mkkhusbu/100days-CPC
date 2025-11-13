// function add(a,b){
//     return a+b;
// }



// let sum = add;

// function avg(a,b,fn){
//     return fn(a,b)/2;
// }

// let res = avg(10,20,sum)
// console.log(res);


// function compareBy(propertyName) {
//   return function (a, b) {
//     let x = a[propertyName],
//       y = b[propertyName];

//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }
// let products = [
//     {name: 'iPhone', price: 900},
//     {name: 'Samsung Galaxy', price: 850},
//     {name: 'Sony Xperia', price: 700}
// ];

// console.log('Products sorted by name:');
// products.sort(compareBy('name'));

// console.table(products);
// !Another Try

// function CompareFun(propertyName){
//     return function(a,b){
//         let m = a[propertyName],
//             n = b[propertyName];
        
//         if(m<n) return 1;
//         else if (m>n) return -1;
//         else return 0;
//     }
// }
// let users = [
//   { name: "Rahim", age: 25 },
//   { name: "Karim", age: 20 },
//   { name: "Jabbar", age: 30 },
//   { name: "Anis", age: 22 }
// ];

// console.log(users.sort(CompareFun("age")))
// console.table(users)
function compareBtw(propertyName){
    return function(a,b){
        let A  = a[propertyName],
            J = b[propertyName];
        if(A > J) return 1;
        else if(A < J) return -1;
        else return 0;

    }
}
let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

let resName = products.sort(compareBtw('name'))
console.table(resName.reverse());
let resNum = products.sort(compareBtw("price"));
console.table(resNum)