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
        Validators.required,
        Validators.pattern("[a-zA-Z]+$")
      ]),
      lname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+$")
      ]),
      gender:new FormControl('',[
        Validators.required,
        Validators.pattern("")
      ]),
      contactNo:new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]+$")
      ]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required]),
      empId:new FormControl('',[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("[0-9]+$")
      ])
    }
  );
 
  onSubmit(){
    console.warn(this.myFormGroup.value);
  }
}
