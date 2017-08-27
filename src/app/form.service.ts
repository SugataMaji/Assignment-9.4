import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FormService {
  private products: Array<object>= [
    {
     option: "mobile"
    },
    {
     option: "bike"
    },
    {
     option: "car"
    }

  ];
  constructor(private http: Http) { }
 getproduct(){
    return this.products;
 }
}
