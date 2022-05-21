import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PERSONS } from './mock-persons';
import { Person } from './person';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personsUrl = 'api/persons';  // URL to web api

  constructor(private http: HttpClient,private messageService: MessageService) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  getPerson(id: number): Observable<Person> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const person = PERSONS.find(p => p.id === id)!;
    this.messageService.add(`PersonService: fetched person id=${id}`);
    return of(person);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }

}
