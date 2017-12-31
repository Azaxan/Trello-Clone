import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CardDataService {

  cards$ = new Subject<Card[]>();
  
  constructor(private api: CardService) { }

  addCard(card: Card): Observable<Card>{
    return this.api.createCard(card);
  }
  getCardList(): Observable<Card[]>{
    return this.api.getCardList();
  }
  getCardById(cardId: number): Observable<Card> {
    return this.api.getCardById(cardId);
  }

  updateBoardList(cards: Card[])
  {
    this.cards$.next(cards);
  }
}
