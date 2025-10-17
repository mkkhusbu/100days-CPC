const person = {
    name: 'GFG',
    greet: function() {
        console.log('Hello, ' + this.name);//undefined dekhabe
    }
};
const greet = person.greet;
greet();

function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));//$2.00
console.log(getFee(false))//$10.00
console.log(getFee(null))//$10.00

console.log(new Date().getDay());

switch(new Date().getDay()){
    case 6: 
        text = "Today is Saturday";
        break;
    case 0:
    text = "Today is Sunday";
    break;
    default:
        text = "Looking forward to the Weekend";
}