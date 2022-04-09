import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private myservice:MyServiceService) { }
  jsonData:string="";

  ngOnInit(): void {
    this.myservice.product().subscribe(productData=>this.jsonData=productData)

  }
  @Input() childPropertTest:String="";

}
