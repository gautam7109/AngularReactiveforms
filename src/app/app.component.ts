import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 userForm:FormGroup;
 constructor(){
   this.userForm = new FormGroup({
     'Username' : new FormControl('',Validators.required),
     'E-mail' : new FormControl(),
     'PhoneNumber' : new FormControl(),
     'Password' : new FormControl(),
     'Confirm Password' : new FormControl(),
     'Country' : new FormControl(),
     'State' : new FormControl(),
     'City' : new FormControl(),
     'Gender' : new FormControl(),
     'Marital Status' : new FormControl(),
     'Favourite Food' : new FormControl(),
     'Favourite Color' : new FormControl(),
   })

 }
 submitData(){
   console.log(this.userForm.value)
 }
}
