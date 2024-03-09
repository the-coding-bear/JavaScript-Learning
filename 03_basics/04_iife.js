// Immediately Invoked Function Expressions (IIFE)


(function abc(){
    console.log(`DB CONNECTED`);
})();
//abc()

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('akanksha')