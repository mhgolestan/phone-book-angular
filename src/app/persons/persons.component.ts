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

  persons: Person[] = [];

  constructor(private personService: PersonService,private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getPersons();
  }
  

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }

}
