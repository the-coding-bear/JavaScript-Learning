const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

//console.log(Math.PI);
// Math.PI = 5
//console.log(Math.PI);

const car = {
    name: 'thar',
    price: 900000,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(car,"name"));

Object.defineProperty(car,'name',{
    Writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(car,"name"));

console.log(Object.getOwnPropertyDescriptor(car,"name"));

for(let [key,value] of Object.entries(car)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
