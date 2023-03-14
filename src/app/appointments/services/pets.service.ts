import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http:HttpClient) { }

  postpatient(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getpatient(data:any){
    return this.http.get<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // getData(data:any){
  //   let url = "http://localhost:3000/posts";
  //   return this.http.get("http://localhost:3000/posts");
  // }

}
