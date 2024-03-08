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
 // const result=addTwoNumbers(5,45)
// console.log("Result: ",result);

 function loginUserMessage(username){
    if(username==undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
 }

 // console.log(loginUserMessage("Akanksha"))
 // console.log(loginUserMessage("Akanksha"));

 function calculateCartPrice(val1,val2,...num1){
    return num1
 }
  // console.log(calculateCartPrice(200,500,40))

  const user={
    username:"Akanksha",
    price: 199
  }

  function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price }`);
 }
 // handleObject( user)
 handleObject(
    {
        username:"Akku",
        price: 399
    }
 )

 const myNewArray = [200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));