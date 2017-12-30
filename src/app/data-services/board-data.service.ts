import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { BoardService } from '../services/board.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BoardDataService {

  // boards: Board[] = [];
  boards$ = new Subject<Board[]>();

  constructor(private api: BoardService) { }

  addBoard(board: Board): Observable<Board>{
    return this.api.createBoard(board);
  }
  getBoardList(): Observable<Board[]>{
    return this.api.getBoardList();
  }
  getBoardById(boardId: number): Observable<Board> {
    return this.api.getBoardById(boardId);
  }

  updateBoardList(boards: Board[])
  {
    this.boards$.next(boards);
  }
}
