class Person {

    static count = 0;

    constructor(){
        this.firstName  = 'Please Provide Your First Name'
        this.lastName = 'Please Provide Your Last Name'
        this.age = 0
        Person.count +=1
    }

    set FirstName(value){
        this.firstName = value
    }

    get FirstName(){
        return this.firstName
    }


    set LastName(value){
        this.lastName = value
    }
    get LastName(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }   
    get Age(){
        return this.age
    }


    display(){
        console.log(
            `
            Person : ${Person.count}
            firstName : ${this.FirstName}
            last name : ${this.LastName}
            age : ${this.Age}
            `
        );
    }
}

export {
    Person
}