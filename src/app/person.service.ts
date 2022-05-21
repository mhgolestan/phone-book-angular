import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONS } from './mock-persons';
import { Person } from './person';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private messageService: MessageService) { }

  getPersons(): Observable<Person[]> {
    const persons = of(PERSONS);
    this.messageService.add('PersonService: fetched persons');
    return persons;
  }

  getPerson(id: number): Observable<Person> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const person = PERSONS.find(p => p.id === id)!;
    this.messageService.add(`PersonService: fetched person id=${id}`);
    return of(person);
  }

}
