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

  add(name: string, phone: string): void {
    name = name.trim();    
    if (!name) { return; }
    this.personService.addPerson({name, phone} as Person)
      .subscribe(person => {
        this.persons.push(person);
      });
  }

  delete(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.personService.deletePerson(person.id).subscribe();
  }

}
