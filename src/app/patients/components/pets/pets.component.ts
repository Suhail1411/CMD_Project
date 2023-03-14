import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  posts:any = [];
  public getJsonValue:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getpatientdata();
  }

  getpatientdata(){
    this.http.get(' http://localhost:3000/posts').subscribe((res)=>{this.posts = res});
  }

  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
