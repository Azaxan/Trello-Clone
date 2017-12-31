import { Component, OnInit, Input } from '@angular/core';
import { CardDataService } from '../data-services/card-data.service';
import { Card } from '../models/card';
import { ColumnDataService } from '../data-services/column-data.service';
import { Column } from '../models/column';
import { Board } from '../models/board';
import  {Where } from '../pipes/where.pipe';
import { fadeInContent } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() currentBoard: Board;

  cards: Card[] = [];
  columns: Column[] = [];
  newCards: Card[] = [];
  isAddCard: Boolean = false;

  constructor(private cardDataService: CardDataService,
              private columnDataService: ColumnDataService) { }

  ngOnInit() {
    this.getColumnList();
    this.getCardList();
  }

  getColumnList(){
    return this.columnDataService
    .getColumnList()
    .subscribe(
      (columns) => {
        this.columns = columns.filter(x => x.boardId == this.currentBoard.id);
        this.initiateNewCards();
      }
    )
  }

  getCardList(){
    return this.cardDataService
    .getCardList()
    .subscribe(
      (cards) => {
        this.cards = cards.filter(x => x.boardId == this.currentBoard.id);
      }
    )
  }

  addCard(card){
    
    this.cardDataService
      .addCard(card)
      .subscribe(
        (newCard) => {
          newCard.id = this.cards.length + 1;
          this.cards = this.cards.concat(newCard);
          this.initiateNewCards();
          this.isAddCard = false;
        }
      )
  }

  showTextArea(columnId:number)
  {

  }
  initiateNewCards()
  {
    this.columns.forEach(x => {
      let newCard = new Card();
      newCard.boardId = x.boardId;
      newCard.columnId = x.id;
      newCard.title = '';
      this.newCards.push(newCard);
    })
  }

}
