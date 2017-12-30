import { Component, OnInit } from '@angular/core';
import { BoardDataService } from '../data-services/board-data.service';
import { Observable } from 'rxjs/Observable';
import { Board } from '../models/board';
import {Subscription} from 'rxjs/subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  boards: Board[] = [];
  subscription: Subscription;

  constructor(private boardDataService: BoardDataService) { }

  ngOnInit() {
      this.getBoardList();
      this.subscription = this.boardDataService.boards$.subscribe(
        message => {this.boards = message}
      );
      // this.getBoardList();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getBoardList(){
    return this.boardDataService
    .getBoardList()
    .subscribe(
      (boards) => {
        this.boards = boards;
      }
    )
  }
}
