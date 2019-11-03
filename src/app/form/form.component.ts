import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() searchTerm = new EventEmitter <any> ();

  searchByUser:string;

  searchName(){
    this.searchTerm.emit(this.searchByUser);
  }
  constructor() { }

  ngOnInit() {
  }

}
