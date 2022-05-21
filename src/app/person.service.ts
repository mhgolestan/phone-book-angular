import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get<Person[]>(this.personsUrl)
          .pipe(
            tap(_ => this.log('fetched persons')),
            catchError(this.handleError<Person[]>('getPerson', []))
          );
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

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
