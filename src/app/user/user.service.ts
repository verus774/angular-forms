import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {IUser} from './models/IUser';
import {ILevel} from './models/ILevel';
import {IArea} from './models/IArea';
import {areas, levels, users as initUsers} from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = initUsers;
  private id = 10;

  private usersSource = new BehaviorSubject<IUser[]>(this.users);
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
    this.users.push({...user, id: (++this.id).toString()});
    this.usersSource.next(this.users);
    return of({success: true});
  }

  public removeUser(id: string): Observable<any> {
    this.users = this.users.filter(user => user.id !== id);
    this.usersSource.next(this.users);
    return of({success: true});
  }

  public saveUser(newUser: IUser): Observable<any> {
    this.users = this.users.map(user => {
      if (user.id === newUser.id) {
        return newUser;
      }
      return user;
    });

    this.usersSource.next(this.users);
    return of({success: true});
  }

  public getLevels(): Observable<ILevel[]> {
    return of(levels);
  }

  public getAreas(): Observable<IArea[]> {
    return of(areas);
  }
}
