class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password}Anshika`
    }
    set password(value){
        this._password = value
    }
}


const Anshika = new User("ak@akku.ai","abc")
console.log(Anshika.email);