import { Component, OnInit } from '@angular/core';
import { User } from './user.component';


@Component({
  selector: 'app-mybinding',
  templateUrl: './mybinding.component.html',
  styleUrls: ['./mybinding.component.scss']
})
export class MybindingComponent implements OnInit {

 public inputValue : string="";
 public isValid : boolean=true;
 public changedValue : string="";



  ngOnInit(): void {
  }

  public users: User[];

  getchanged(getoptionValue:any){
    this.changedValue=getoptionValue;
    
    if(getoptionValue=='TV' || getoptionValue=='MOBILE'){
this.users.splice(this.users.length-1);
    }
    else{
      this.users.push(new User('Jack', 56, new Date('2005-03-25')));
    }
  


  }
  constructor(){
    
  this.users = [new User('Jack', 56, new Date('2005-03-25')),
  new User('Lisa', 32, new Date('2012-05-09')),
  new User('Jayesh', 28, new Date('2014-10-21'))] ;
  }
}
