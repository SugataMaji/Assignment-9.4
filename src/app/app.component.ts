import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormService} from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formvalue;
  products=[];
  constructor(private services:FormService){

  }
  ngOnInit(){
   this.products = this.services.getproduct();
  }

  onformsubmit(form){
    if(form.valid){
    console.log(form.value);
    this.formvalue=form;
        alert("Form is submitted successfully");
  }
  else{
    alert("Form is invalid");
  }
}
}
