class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    get email(){
        return this._email.toUpperCase();
    }

    set password(value){
        this._password= value;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
}

const lokesh = new User("lokesh@gmail.com", 'abc');
console.log(lokesh.email);
console.log(lokesh.password);