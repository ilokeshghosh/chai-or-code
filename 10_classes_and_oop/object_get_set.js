const User ={
    _email: 'lokesh@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}


const tea = Object.create(User)
tea.email = "ghosh@gmail.com";
console.log(tea.email);