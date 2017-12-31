import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BoardDataService } from '../data-services/board-data.service';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private route: ActivatedRoute, 
              private location: Location, 
              private boardDataService: BoardDataService) { }

  ngOnInit() {
    this.getBoard();
  }

  getBoard(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.boardDataService.getBoardById(id)
        .subscribe(board => this.board = board);
  }
}
