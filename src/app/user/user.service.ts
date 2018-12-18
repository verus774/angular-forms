import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

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
  private currUserSource = new Subject<IUser>();

  public getUsers(): Observable<IUser[]> {
    return this.usersSource.asObservable();
  }

  public getCurrUser(): Observable<IUser> {
    return this.currUserSource.asObservable();
  }

  public setCurrUser(user: IUser): void {
    this.currUserSource.next(user);
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
