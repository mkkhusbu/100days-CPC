let res = (10,10+30);
console.log(res);
let x = 10;
let y = (x,x+1);

console.log(x,y)
x+1;
y =x+1;

console.log(x,y)

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = '';
for(let i = 0, j=1; i<board.length;i++,j++){
    s+=board[i] + ' ';
    if(j%3==0){
        console.log(s);
        s  ="";
    }
}
 
let a =1,
    b =2,
    c=(a++,b++,a+b);
    console.log(a,b)
    console.log(c)