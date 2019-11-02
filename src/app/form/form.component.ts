import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() emitUser = new EventEmitter <any> ();

  searchName(){
    this.emitUser.emit(this.searchName);
    console.log(this.searchName)
  }
  constructor() { }

  ngOnInit() {
  }

}
