import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../models/IUser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  onEditClick(user: IUser) {
    this.userService.setCurrUser(user);
  }
}
