import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // private personsUrl = 'api/persons';  // URL to web api
  private personsUrl = 'https://floating-retreat-79255.herokuapp.com/api/persons';  // URL to web api

  constructor(private http: HttpClient,private messageService: MessageService) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
          .pipe(
            tap(_ => this.log('fetched persons')),
            catchError(this.handleError<Person[]>('getPerson', []))
          );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;
    console.log(url);
    
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** PUT: update the hero on the server */
  updatePerson(person: Person): Observable<any> {
    
    return this.http.put(`${this.personsUrl}/${person.id}`, {"name":person.name, "phone": person.phone}, this.httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  /** POST: add a new hero to the server */
  addPerson(person: Person): Observable<Person> {    
    return this.http.post<Person>(this.personsUrl, person, this.httpOptions).pipe(
      tap((newPerson: Person) => this.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;

    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchPersons(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    return this.http.get<Person[]>(`${this.personsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found persons matching "${term}"`) :
        this.log(`no persons matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPersons', []))
    );
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
