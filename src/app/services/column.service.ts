import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Column } from '../models/column';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ColumnService {

  constructor(private http: Http) { }
  
    // API: GET /columns
    public getColumnList(): Observable<Column[]>{
      return this.http
        .get(API_URL + '/columns')
        .map(response => {
          const column = response.json();
          return column.map((column) => new Column(column));
        })
        .catch(this.handleError);
    }  
  
    // API: POST /columns
    public createColumn(column: Column): Observable<Column>{
        return this.http
        .post(API_URL + '/columns', column)
        .map(response => {
          return new Column(response.json());
        })
        .catch(this.handleError);
    }
  
    // API: GET /columns/:id
    public getColumnById(columnId: number): Observable<Column>{
        return this.http
        .get(API_URL + '/columns/' + columnId)
        .map(response => {
          return new Column(response.json());
        })
        .catch(this.handleError);
    }
  
    // API: PUT /columns/:id
    public updateCard(column: Column): Observable<Column> {
        return this.http
        .put(API_URL + '/columns/' + column.id, column)
        .map(response => {
          return new Column(response.json());
        })
        .catch(this.handleError);
    }
  
    private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
    }

}
