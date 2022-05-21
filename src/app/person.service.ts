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

}
