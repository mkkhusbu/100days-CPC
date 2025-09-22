let i =1,
    j=null,
    k=undefined,
    l=0;

    console.log(j||k);
    console.log(i||l);
    console.log(Boolean( j || k));
    console.log(Boolean(i || l));
    
    //!JavaScript Ternary Operato/

    //*======JavaScript to illustrate Conditional operator

let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";
console.log(res);

//*Nested Ternary Operators=========
let day = 3;
let grettings = (day ===1) ?'Start of the week' :
                (day === 2) ? '2nd Day' :
                (day === 3) ? 'Midweek' :
                (day === 4) ? 'Almost weekend' :
                'weekend';
                console.log(grettings);
                

function ChkAge(age){
    return (age >= 18 ? "Adult" : "Minor");
}

console.log(ChkAge(20));
console.log(ChkAge(17));

//* Using the Ternary Operator with Function Calls
function sayHey(hi){
    console.log(`Hello ! ${hi}. `);
}
function sayBye(bye){
    console.log(`Goodbye ! ${bye}`);
}

let isLiving = true;
let name = "Arif";

isLiving ? sayHey(name) : sayBye();

    
    