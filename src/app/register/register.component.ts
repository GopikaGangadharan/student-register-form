import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerStatus :boolean = false

  registerForm=this.fb.group({
    admno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    firstName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lastName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    emailId:['',[Validators.required,Validators.email]],
    mobileNo:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    gender:['',[Validators.required]],
    dob: ['', [Validators.required]],
    groups:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private registerRouter:Router){
  }
  

  //register
  register(){
    let admno=this.registerForm.value.admno
    let fname=this.registerForm.value.firstName
    let lname=this.registerForm.value.lastName
    let address=this.registerForm.value.address
    let email=this.registerForm.value.emailId
    let mobile=this.registerForm.value.mobileNo
    let gender=this.registerForm.value.gender
   let dob = this.registerForm.value.dob
    let groups=this.registerForm.value.groups

    if(this.registerForm.valid){
      //call register  of apiservice
      this.api.register(admno,fname,lname,address,email,mobile,gender,dob,groups)
      .subscribe((result:any)=>{
        alert(result.message);
        //redriect to home page -
        this.registerStatus = true  //new page for msg viewing
        setTimeout(()=>{
        this.registerRouter.navigateByUrl('home')
      }, 5000);
    },
     //400 response code
      (result:any)=>{
        alert(result.error.message)
        //reset value of input field
        this.registerForm.reset()
      }
      )
    }
    else{
      alert('Invalid Form')
    }
  }
}
 

