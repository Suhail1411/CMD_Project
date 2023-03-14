import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddPetsService } from 'src/app/patients/services/add-pets.service';
import { AddPetsModule } from '../../add-pets.module';
@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

    formValue !: FormGroup;
    AddPetsModuleobj : AddPetsModule = new AddPetsModule();
    Addpets:any;

  constructor(private formBuilder:FormBuilder,private api:AddPetsService) { }

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

        this.api.postpatient(this.AddPetsModuleobj).subscribe(res=>{
          console.log(res);
          alert("Patient detail added Successfully");
          this.formValue.reset();
        }
        err=>{
          alert("Something went wrong")
        })
      }
}
