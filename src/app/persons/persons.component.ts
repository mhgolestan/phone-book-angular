import { Person } from '../../person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
    person: Person = {
    id: 1,
    name: 'Windstorm',
    phone: "1234"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
