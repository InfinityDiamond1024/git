import { Component, inject } from '@angular/core';
import { Route } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Employee } from '../Models/Employee';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValueChangeEvent } from '@angular/forms';
import { __param } from 'tslib';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,AsyncPipe,FormsModule,ReactiveFormsModule],
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.css'
  
})



export class HomeComponent {
  

  Employeeform = new FormGroup({

    name :new FormControl<string>(''),
    code : new FormControl<string| null>(null),
    email : new FormControl<string| null>(null),
    active : new FormControl<boolean>(false)


  })

  onDelete(id:number){

    this.http.delete(`https://localhost:7176/api/Employee/${id}`).subscribe({
      next:(value)=>{
        alert('employee deleted');
        this.employee$ = this.GetData();

      }
    })

  }
  onFormSubmit(){
    const addemployeerequest = {
      name:this.Employeeform.value.name,
      code:this.Employeeform.value.code,
      email:this.Employeeform.value.email,
      Active : this.Employeeform.value.active

    }
    this.http.post('https://localhost:7176/api/Employee',addemployeerequest).subscribe({
      next:(value) =>{
        console.log(value);
        this.employee$ = this.GetData();
        this.Employeeform.reset();
      }
    });

  }
  http = inject(HttpClient);
  
  employee$ = this.GetData();
  
  

private GetData():Observable<Employee[]> {
  return this.http.get<Employee[]>('https://localhost:7176/api/Employee');
}


}