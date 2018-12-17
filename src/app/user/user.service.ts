import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {IUser} from './models/IUser';
import {ILevel} from './models/ILevel';
import {IArea} from './models/IArea';
import {areas, levels, users} from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private initUsers = users;
  private id = 10;
  private usersSource = new BehaviorSubject<IUser[]>(this.initUsers);

  public getUsers(): Observable<IUser[]> {
    return this.usersSource.asObservable();
  }

  public addUser(user: IUser): Observable<any> {
    this.usersSource.next([...this.initUsers, {...user, id: (++this.id).toString()}]);
    return of({success: true});
  }

  public getLevels(): Observable<ILevel[]> {
    return of(levels);
  }

  public getAreas(): Observable<IArea[]> {
    return of(areas);
  }
}
