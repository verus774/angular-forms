import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {IUser} from './IUser';
import {users} from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getUsers(): Observable<IUser[]> {
    return of(users);
  }
}
