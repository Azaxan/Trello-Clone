import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { BoardDataService } from '../data-services/board-data.service';
import { Observable } from 'rxjs/Observable';
import { Board } from '../models/board';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.css'],
  providers: [BoardDataService]
})
export class BoardDialogComponent implements OnInit {

constructor(private router: Router, public dialogRef: MatDialogRef<BoardDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }
  
  goToBoard(id: number)
  {
    this.router.navigate(['/boards', id]);
  }
}
