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
myHeros.Akku()
myHeros.heyAkku()
heroPower.heyAkku()