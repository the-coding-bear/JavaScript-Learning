function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const akku = new createUser("akku","akku@fb.com","123")
console.log(akku);