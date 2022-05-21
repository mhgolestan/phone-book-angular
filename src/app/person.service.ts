import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONS } from './mock-persons';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Observable<Person[]> {
    const persons = of(PERSONS);
    return persons;
  }

}
