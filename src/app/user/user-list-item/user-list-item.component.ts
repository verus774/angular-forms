import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../models/IUser';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent {
  @Input() public user: IUser;
  @Output() private setCurrUser = new EventEmitter<IUser>();
  @Output() private removeUser = new EventEmitter<string>();

  private onEditClick(user: IUser) {
    this.setCurrUser.emit(user);
  }

  private onRemoveClick(id: string) {
    this.removeUser.emit(id);
  }
}
