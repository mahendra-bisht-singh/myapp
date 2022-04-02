export class User {
    name : string;
    age : number;
    joinDate : Date;
    constructor(name: string, age : number, joinDate : Date) {
      this.name = name;
      this.age = age;
      this.joinDate  = joinDate;
    }
  }