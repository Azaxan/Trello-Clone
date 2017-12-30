import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatDialogModule } from '@angular/material';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatDialogModule, MatInputModule, NoopAnimationsModule, BrowserAnimationsModule],
  exports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatMenuModule, MatDialogModule, MatInputModule, NoopAnimationsModule, BrowserAnimationsModule],
})
export class MaterialModule { }
