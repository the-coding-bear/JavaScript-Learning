const user ={
    username : "Akkuu",
    loginCount : 4,
    sifnedIn : true,

    getUserDeatails: function(){
       // console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this);
    }
}




//console.log(user.username);
//console.log(user.getUserDeatails());
//console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
      return this
}

const userOne = new User("Akki", 2 ,true)
const userTwo = new User("javascript",4,false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
//console.log(userTwo);