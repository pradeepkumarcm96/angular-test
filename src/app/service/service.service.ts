import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  c: any;
  constructor() { }

  subNumber(a, b){
    this.c = a - b;
    return this.c;
  }

  multipleNumber(a, b){
    this.c = a * b;
    return this.c;
  }

}
