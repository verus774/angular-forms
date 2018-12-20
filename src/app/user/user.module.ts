import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {UserListItemComponent} from './user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserListItemComponent,
  ],
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
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    TextMaskModule,
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
  ]
})
export class UserModule { }
