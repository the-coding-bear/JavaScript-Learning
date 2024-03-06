function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
}
// sayMyName()

// function addTwoNumbers(no1,no2){
   // console.log(no1+no2);
//}
function addTwoNumbers(no1,no2){
    //let result=no1+no2
   // return result
   return no1+no2
}
 const result=addTwoNumbers(5,45)
 console.log("Result: ",result);

 function loginUserMessage(username){
    if(username==undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
 }

 // console.log(loginUserMessage("Akanksha"))
 console.log(loginUserMessage("Akanksha"));