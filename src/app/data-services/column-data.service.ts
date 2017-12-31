import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { ColumnService } from '../services/column.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ColumnDataService {

  columns$ = new Subject<Column[]>();
  
  constructor(private api: ColumnService) { }

  addColumn(column: Column): Observable<Column>{
    return this.api.createColumn(column);
  }
  getColumnList(): Observable<Column[]>{
    return this.api.getColumnList();
  }
  getColumnById(columnId: number): Observable<Column> {
    return this.api.getColumnById(columnId);
  }

  updateColumnList(columns: Column[])
  {
    this.columns$.next(columns);
  }

}
