import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 1, name: 'Mohammad', phone: "1234" },
      { id: 2, name: 'Hossein', phone: "5678" }
    ];
    return {persons};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(persons: Person[]): number {
    return persons.length > 0 ? Math.max(...persons.map(person => person.id)) + 1 : 11;
  }
}