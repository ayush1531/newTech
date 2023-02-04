import { NgModule } from "@angular/core";
// import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-adapter"

import {
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
//   MatToolbar
} from "@angular/material";

@NgModule({
  exports: [
    MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
//   MatToolbar
  ]
})
export class MaterialModule { }