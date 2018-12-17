import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
  declarations: [UserListComponent, UserAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    TextMaskModule,
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
  ]
})
export class UserModule { }
