import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatDialogModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatDialogModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule],
})
export class MyMaterialComponents { }