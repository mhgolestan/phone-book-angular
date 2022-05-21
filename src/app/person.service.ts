import { Injectable } from '@angular/core';
import { PERSONS } from './mock-persons';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Person[] {
  return PERSONS;
}
}
