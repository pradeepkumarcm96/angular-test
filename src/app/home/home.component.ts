import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 c: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  addNumbers(a, b){
    this.c = a + b ;
    console.log(this.c);
  }

  subNumbers(a, b){
   const result  = this.service.subNumber(a, b);
   console.log(result);
  }

  multipleNumbers(a, b){
    this.c = this.service.multipleNumber(a, b);
    console.log(this.c);
  }

}
