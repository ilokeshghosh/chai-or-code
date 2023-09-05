class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }
}


const t1 = new Teacher('chai', 'chai@gmail.com', 'asdf')

t1.addCourse();
t1.logMe();

const u = new User('ice tea')
u.logMe();


console.log(t1 instanceof Teacher);
console.log(t1 instanceof User);