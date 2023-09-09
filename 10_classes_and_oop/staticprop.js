class User{
    constructor(username){
        this.username = username
    }

    logMe(){
    console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const u1 = new User('lokesh');
u1.logMe();
// console.log(u1.createId()); //will throw error


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }


}

const t1 =  new Teacher('ghosh', 'lokesh@gmail.com');
t1.logMe();
// console.log(t1.createId());


