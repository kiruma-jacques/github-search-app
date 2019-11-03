import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  myUsers: User[];

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
    this.locateName('jakesIII');
  }

  locateName(searchByUser){
    this.http.getAcc(searchByUser).then(
      (success)=>{
        this.myUsers = this.http.myUsers;
        console.log(this.myUsers)
      }, (error)=>{
        console.log(error);
      }
    )
  }

}
