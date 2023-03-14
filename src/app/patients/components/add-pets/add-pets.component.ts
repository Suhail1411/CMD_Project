import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/appointments/services/pets.service';
import { PetsComponent } from '../pets/pets.component';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AddPetsModule } from './add-pets/add-pets.module';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
      formValue !:FormGroup;
  AddPetsModuleobj : AddPetsModule  = new AddPetsModule();
  Addpets:any;
  api: any;
  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
        this.formValue = this.formBuilder.group({
          firstname : [' '],
          lastmname: [' '],
          username: [' '],
          address: [' '],
          email: [' '],
          password: [' '],
          confirmpassword: [' '],
          gender: [' '],
          phone: [' '],
          postalcode: [' '],
          bio: [' '],
          city: [' '],
      })
  }

  postPatientDetails(){
    this.AddPetsModuleobj.firstname = this.formValue.value.firstname;
    this.AddPetsModuleobj.lastname = this.formValue.value.lastmname;
    this.AddPetsModuleobj.username = this.formValue.value.username;
    this.AddPetsModuleobj.address = this.formValue.value.username;
    this.AddPetsModuleobj.address = this.formValue.value.address;
    this.AddPetsModuleobj.email = this.formValue.value.email;
    this.AddPetsModuleobj.password = this.formValue.value.password;
    this.AddPetsModuleobj.confirmpassword = this.formValue.value.confirmpassword;
    this.AddPetsModuleobj.gender = this.formValue.value.gender;
    this.AddPetsModuleobj.phone = this.formValue.value.phone;
    this.AddPetsModuleobj.postalcode = this.formValue.value.postalcode;
    this.AddPetsModuleobj.bio = this.formValue.value.bio;
    this.AddPetsModuleobj.city = this.formValue.value.city;

    this.api.postpatient(this.AddPetsModuleobj).subscribe((res: any)=>{
      console.log(res);
      alert("Patient detail added Successfully");
      this.formValue.reset();
    },
      (    err: any)=>{
      alert("Something went wrong")
    })
  }

  }

