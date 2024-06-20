interface Istudent {
    name: string;
    age: number;
    email?: string;
    getDescription(): string;
}

class StudentOne {
    public name:Istudent;
    public age:Istudent;

    constructor(name: Istudent, age:Istudent){
        this.name = name;
        this.age = age;
    }

    getDescription(): string{
        return `Nome: ${this.name} \nIdade${this.age}`
    };
};

const personStudent = new StudentOne("joao", 26);

class StudentTwo{

    constructor(public name:Istudent, public age:Istudent, public email:Istudent){}
}