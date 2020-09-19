import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  reactForm:FormGroup;
  constructor() { 
    this.reactForm=this.detailsFormGrp();
  }

  detailsFormGrp(){
     return new FormGroup({
       
           firstName: new FormControl(),
           lastName: new FormControl(),
           email: new FormControl(),
           contact: new FormControl()
       

     });

  } 


  ngOnInit() {
  }

}