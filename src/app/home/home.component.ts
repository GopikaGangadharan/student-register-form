import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  table:any
  constructor(private api:ApiService,private homeRouter:Router){}

  

  ngOnInit() {
    this.api.getAllStudents().subscribe((result)=>{
console.log(result);
this.table=result
    })
   
  }


  home(){
    this.homeRouter.navigateByUrl('')
  }

 }
