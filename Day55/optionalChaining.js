let user = {
    name: "Rahim",
    address: {
        city: "Dhaka"
    }
};

console.log(user.address.city);//Dhaka

let user2 = {
   name: "Rahim"
};

//console.log(user2.address.city);//optionalChaining.js:14 Uncaught TypeError:

console.log(user2.address?.city);//undefined

//!Object Property Safe Access

let user3 = {};
console.log(user3.address?.city);//undefined

// !Array Safe Access
let arr = null;
//console.log(arr[0]);// Uncaught TypeError:
console.log(arr?.[0]);//undefined


// !Function Call Safe

let user4 = {
    say(){return "hello";}
};
console.log(user4.say());//Hello

let admin = {};
console.log(admin.say?.());//undefined

// ? Why use it 
//without Optional chain
var city = user && user.address && user.address.city;
//With using Optional chaning
var city = user.address?.city

//! user?.address.city ====> Wrong 
//! user?.address.city ===> Right

// default value
let settings = {};
console.log(settings.user?.theme ?? "light")

var data = {};
console.log(data.getUser?.());

let response = {
  user: {
    profile: {
      address: null
    }
  }
};
console.log(response.user?.profile?.address?.city)

let shop = {
  products: [
    { name: "Laptop", price: 500 },
    null,
    { name: "Mouse", price: 20 }
  ]
};

console.log(shop.products?.[0]?.name);
console.log(shop.products?.[2]?.name);
console.log(shop.order?.[0].id);


let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for(let i = 0,j = 1;i < board.length;i++,j++){
    s += board[i] + ' ';
    if(j%3==0){
        console.log(s);;
        s = '';

    }

}