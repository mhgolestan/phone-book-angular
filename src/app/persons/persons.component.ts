import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
// import { PERSONS } from '../mock-persons';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];

  selectedPerson?: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
  

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

}
