import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardDialogComponent } from './board-dialog/board-dialog.component';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { BoardComponent } from './board/board.component';
import { CardListComponent } from './card-list/card-list.component';
import { MoveDialogComponent } from './move-dialog/move-dialog.component';

import { MaterialModule } from './material.module';
import { CardService } from './services/card.service';
import { BoardService } from './services/board.service';
import { BoardDataService } from './data-services/board-data.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    BoardDialogComponent,
    NewBoardDialogComponent,
    BoardComponent,
    CardListComponent,
    MoveDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [BoardDialogComponent, NewBoardDialogComponent],
  providers: [BoardService, CardService, BoardDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
