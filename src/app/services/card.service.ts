import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Card} from '../models/card';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class CardService {

  constructor(private http: Http) { }

  // API: GET /cards
  public getCardList(): Observable<Card[]>{
    return this.http
      .get(API_URL + '/cards')
      .map(response => {
        const card = response.json();
        return card.map((card) => new Card(card));
      })
      .catch(this.handleError);
  }  

  // API: POST /cards
  public createCard(card: Card): Observable<Card>{
      return this.http
      .post(API_URL + '/cards', card)
      .map(response => {
        return new Card(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /cards/:id
  public getCardById(cardId: number): Observable<Card>{
      return this.http
      .get(API_URL + '/cards/' + cardId)
      .map(response => {
        return new Card(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /cards/:id
  public updateCard(card: Card): Observable<Card> {
      return this.http
      .put(API_URL + '/cards/' + card.id, card)
      .map(response => {
        return new Card(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
