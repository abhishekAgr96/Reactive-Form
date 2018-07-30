import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'reactiveForm';
  myFormGroup=new FormGroup({
      fname:new FormControl('',[
        Validators.required
      ]),
      lname:new FormControl('',[
        Validators.required]),
      gender:new FormControl('',[
        Validators.required]),
      contactNo:new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required])

    }
  );
 
  onSubmit(){
    console.warn(this.myFormGroup.value);
  }
}
