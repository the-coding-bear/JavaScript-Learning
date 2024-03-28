class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const varA = new Teacher("akku","akku@gmail.com","123")

varA.addCourse()
const varB = new User("javascript")

varB.logMe()

console.log(varA instanceof User);