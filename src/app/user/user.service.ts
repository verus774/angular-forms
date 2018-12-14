import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {IUser} from './IUser';
import {ILevel} from './ILevel';
import {levels, users} from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getUsers(): Observable<IUser[]> {
    return of(users);
  }

  public getLevels(): Observable<ILevel[]> {
    return of(levels);
  }
}
