// const obj = Object.create({}, {
//   secret: {
//     value: 123,
//     enumerable: true
//   }
// });

// console.log(obj.secret);
// console.log(Object.keys(obj))

// !inheritance example

// const person = {
//     name : "Arif",
//     greet(){
//         console.log(`Hello Mk ! ${this.name}`);
//     }
// }

// const employee = Object.create(person,{
//     job :{
//         value:"Js Devoloper",
//         prof :"Student",
//         enumerable:true
//     }
// })
// console.log(employee.job);
// console.log(Object.keys(employee))
// console.log(employee.name);
// employee.greet();

// console.log(Object.getPrototypeOf(employee));

// //?!Create MY Own Console
// function M(x){
//     console.log(x);
// }

// let persn ={
//     type:"Human"
// }

// let  employe = Object.create(persn,{
//     name : {
//         value : "Rahim",
//         enumerable :true
//     },
//     job :{
//         value: "JS Devoloper",
//         enumerable : true
//     },
//     salary :{
//         value : 3000,
//         enumerable : true,
//         writable : true
//     }

// })

// // M(employe.name)
// // M(employe.type)
// // M(employe.job)
// M(Object.getPrototypeOf(employe))

// !Array Destructure 
// const user = {
//   name: "Rahim",
//   age: 25,
//   city: "Dhaka"
// };
// let {name,age,city} = user
// console.log(name);
// let lover ={};
// let {
//     fName = "Arif",
//     lName = "MIM",
//     ages = 24
// } = lover;
// console.log(lName,ages, fName)
 //let { firstName: fname, lastName: lname } = person;
// const student = {
//     name : "Hasan",
//     marks :{
//         math : 70,
//         Eng : 90
//     }
// }

// const {marks:{math,Eng}} = student;
// console.log(math);
// !⭐ Destructuring in Function Parameters

// function PrintUser({name,age}){
//     console.log(name,age);
// }

// const usser ={name : "Mim",age:22};
// PrintUser(user)

// const User = {
//   Name: "Rahim",
//   agge: 25,
//   city: "Dhaka",
//   country: "Bangladesh"
// };
// let {Name,...othersInfo} = User;
// console.log(othersInfo.agge);

// const student = {
//     name : "Hasan",
//     city:"Rangpur",
//     marks :{
//         math : 70,
//         Eng : 90
//     }
// }

// function showMarks({name,city,marks:{math,Eng}}){
//     console.log(math);
//     console.log(name);
//     console.log(city);
    
// }

// showMarks(student)

// let display  = ({fName,lName})=>{console.log(`${fName} ${lName}`);
// }
// let persn = {
//     fName : "arif",
//     lName : "ajmal"
// };

// display(persn)
