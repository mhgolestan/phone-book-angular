import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  //   person: Person = {
  //   id: 1,
  //   name: 'Windstorm',
  //   phone: "1234"
  // };
  persons = PERSONS
  selectedPerson?: Person;
  onSelect(person: Person): void {
    // console.log(person);
    
    this.selectedPerson = person;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
