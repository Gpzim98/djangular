import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  title = 'Members';
  members = [
    {name: "Member 1", id:10},
    {name: "Member 2", id:11}
  ];

  constructor(private api:ApiService) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        console.log("Members ...")
        this.members = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
