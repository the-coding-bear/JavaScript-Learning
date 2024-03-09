// const user={
//     username:"akku",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="ashuu"
// user.welcomeMessage()

// console.log(this);

// function sdd(){
//     let username="akku"
//     console.log(this.username);
// }
// sdd()

// const sdd=function(){
//     let username="akku"
//     console.log(this.username);
// }

const sdd = () =>{
    let username="akku"
    console.log(this);
}
// sdd()

// const addTwo=(num1,num2)=> {
//     return num1+num2
// }

// const addTwo=(num1,num2)=>          // emplicit return
//  num1+num2
// const addTwo=(num1,num2)=> (num1+num2 )       
 
 const addTwo=(num1,num2)=> ({username:"aku" })


console.log(addTwo(2,4))

//const myArray =[2,3,5,8]

//myArray.forEach()