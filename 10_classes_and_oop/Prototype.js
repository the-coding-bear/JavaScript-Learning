// let myName = "sweta"
// let myChannel = "rai"

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Akku = function(){
    console.log(`Akku is present in all objects`);
}

Array.prototype.heyAkku = function(){
    console.log(`Akku says hello`);
}
//heroPower.Akku()
//myHeros.Akku()
//myHeros.heyAkku()
//heroPower.heyAkku()

//inheritance

const User = {
    name: "Akku",
    email: "akku@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "abeera   " 
 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
 }

 anotherUsername.trueLength()
 "Astha".trueLength()
