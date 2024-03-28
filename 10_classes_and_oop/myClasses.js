// ES6

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserame(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const akku = new User("akuu","akku@gmail.com","123")

// console.log(akku.encryptPassword());
// console.log(akku.changeUserame());

// behind the scene

function User(username,email,password){
    this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserame = function(){
    return `${this.username.toUpperCase()}`
}


const akii = new User("akii","akku@gmail.com","123")

console.log(akii.encryptPassword());
console.log(akii.changeUserame());