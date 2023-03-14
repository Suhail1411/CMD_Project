import { Injectable } from '@angular/core';
import { AddPetsModule } from '../components/add-pets/add-pets/add-pets.module';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {
  postpatient(AddPetsModuleobj: AddPetsModule) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
