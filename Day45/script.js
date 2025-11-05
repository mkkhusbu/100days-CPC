  function Person(fName,Lname,age){
        this.fName = fName;
        this.Lname = Lname;
        this.age = age;
    }
let Mim = new Person("Mahajabin","Jannat",22);
console.log(Mim.fName);

Person.prototype.sub = "English";

console.log(Mim.sub);

let mk = "Arif Ajmal Khusbu Mahajabin Jannat Mim";
let km = mk.split('|');
console.log(km)

km = mk.replace(/arif|khusbu|jannat|mim/gi,function(x){return x.toUpperCase()})

console.log(km)