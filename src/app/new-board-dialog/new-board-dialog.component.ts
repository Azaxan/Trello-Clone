import { Component, OnInit, Inject } from '@angular/core';
import { BoardDataService } from '../data-services/board-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Board } from '../models/board';

@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.css']
})
export class NewBoardDialogComponent implements OnInit {

  boards: Board;
  constructor(public dialogRef: MatDialogRef<NewBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
