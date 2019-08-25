import { Component, OnInit } from '@angular/core';
import { FormControl,Form , FormGroup, FormBuilder, Validators} from '@angular/forms'; // for reactive forms
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { //REACTIVE FORMS
registerForm:FormGroup; // use this in html opening form tag // this is used when we use form-group
// userName:FormControl;//REACTIVE CONTROL    // if u hav multiple imputs , u can create like this lines multiple
  constructor(private formBuilder:FormBuilder) {
    // this.userName=new FormControl();   //if u hav multiple imputs , u can create like this lines multiple
    // this.userName.setValue('UI Tricks');//if u hav multiple imputs , u can create like this lines multiple
    //above 2 lines are for single input in reactive forms // if u need more inputs repeat above steps 4 every inpt
    //for morethan 1 input use formgroup , import it in app.modules // next follow below
    this.registerForm =  this.formBuilder.group({ //new FormGroup({ intialy formgrp //changed to formbuilder
      userName :['Mahesh', Validators.required],  //new FormControl('UI Tricks'),
      email: ['angular@gmail.com',Validators.required], //new FormControl('conatact@afd.com'),
      phone:['9090989090'], //new FormControl('985456454'),
      billingAddress: this.formBuilder.group({//new FormGroup({
        doorNumber:['12/3'],// new FormControl('x'),
        city: ['spt'] ,    //new FormControl('sdpt'),
        zip:   ['501202']     //new FormControl('500020')  

      })
    })

   }

  ngOnInit() {
  }
register(){
  console.log(this.registerForm.value);
}
}
