import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Board} from '../models/board';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class BoardService {

  constructor(private http: Http) {
     
   }

   // API: GET /boards
   public getBoardList(): Observable<Board[]>{
      return this.http
        .get(API_URL + '/boards')
        .map(response => {
          const boards = response.json();
          return boards.map((board) => new Board(board));
        })
        .catch(this.handleError);
   }

   // API: POST /boards
   public createBoard(board: Board): Observable<Board>{
      return this.http
      .post(API_URL + '/boards', board)
      .map(response => {
        return new Board(response.json());
      })
      .catch(this.handleError);
   }

   // API: GET /boards/:id
   public getBoardById(boardId: number): Observable<Board>{
      return this.http
      .get(API_URL + '/boards/' + boardId)
      .map(response => {
        return new Board(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /boards/:id
  public updateBoard(board: Board): Observable<Board> {
      return this.http
      .put(API_URL + '/boards/' + board.id, board)
      .map(response => {
        return new Board(response.json());
      })
      .catch(this.handleError);
  }

  // DELETE /boards/:id
  public deleteBoardById(boardId: number) {
    // will use this.http.delete()
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
