import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { NewBoardDialogComponent } from '../new-board-dialog/new-board-dialog.component';
import { BoardDataService } from '../data-services/board-data.service';
import { Observable } from 'rxjs/Observable';
import { Board } from '../models/board';
import {Subscription} from 'rxjs/subscription';
import { debug } from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  boards: Board[] = [];
  subscription: Subscription;

  newBoardTitle: string;
  newBoardId: number;

  message: string;

  constructor(public dialog: MatDialog, private boardDataService: BoardDataService) { }

  ngOnInit() {
    this.getBoardList();
    this.subscription = this.boardDataService.boards$.subscribe(
      message => {this.boards = message}
    );

  }

  openDialog() {
    // this.getBoardList();
    let dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '300px',
      data: {boards: this.boards}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(result == true)
      {
        let dialogRef2 = this.dialog.open(NewBoardDialogComponent, {
          width: '300px',
          data: {newBoardTitle: ''}
        });

        dialogRef2.afterClosed().subscribe(result => {
          if(result != undefined)
          {
            this.newBoardTitle = result;
            this.newBoardId = this.boards.length + 1;

            let newBoard = new Board();
            newBoard.id = this.newBoardId;
            newBoard.title = this.newBoardTitle;

            this.addBoard(newBoard);
          }
        });
      }
    });
  }

  getBoardList()
  {
    this.boardDataService
    .getBoardList()
    .subscribe(
      (boards) => {
        this.boards = boards;
      }
    )
  }

  addBoard(board) {
    this.boardDataService
      .addBoard(board)
      .subscribe(
        (newBoard) => {
          this.boards = this.boards.concat(newBoard);
          this.updateBoardList();
        }
      );
  }

  updateBoardList()
  {
    this.boardDataService.updateBoardList(this.boards);
  }

}
