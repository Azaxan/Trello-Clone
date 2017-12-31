import { Component, OnInit, Input } from '@angular/core';
import { CardDataService } from '../data-services/card-data.service';
import { Card } from '../models/card';
import { ColumnDataService } from '../data-services/column-data.service';
import { Column } from '../models/column';
import { Board } from '../models/board';
import  {Where } from '../pipes/where.pipe';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() currentBoard: Board;

  cards: Card[] = [];
  columns: Column[] = [];

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

}
