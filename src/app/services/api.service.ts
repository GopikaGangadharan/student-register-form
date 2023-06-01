import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //register api call
  register(admno:any,fname:any,lname:any,address:any,email:any,mobile:any,gender:any,dob:any,groups:any){
    const body ={
      admno,
        fname,
        lname,
        address,
        email,
        mobile,
        gender,
        dob,
        groups
        
    }
//server register api-post
return this.http.post('http://localhost:3000/register',body)  
  }


  //get all students
  getAllStudents(){
    return this.http.get('http://localhost:3000/home')

  }
  

  }
  

 
