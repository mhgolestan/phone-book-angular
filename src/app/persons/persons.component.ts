import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  selectedPerson?: Person;
  persons: Person[] = [];

  
  
  constructor(private personService: PersonService,private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getPersons();
  }
  
  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.messageService.add(`PersonsComponent: Selected person id=${person.id}`);

  }

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }

}
