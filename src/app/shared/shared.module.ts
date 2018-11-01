import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatMenuModule, MatTooltipModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule,
  MatTabsModule, MatSelectModule, MatTableModule,
  MatAutocompleteModule, MatChipsModule, MatDialogModule,
  MatDatepickerModule, MatNativeDateModule, MatStepperModule,
];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
  ],
  declarations: [],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
  ],
})
export class SharedModule {
}
