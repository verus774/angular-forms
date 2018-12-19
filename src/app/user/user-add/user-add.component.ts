import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSlideToggleChange} from '@angular/material';
import {forkJoin, Observable} from 'rxjs';

import {UserService} from '../user.service';
import {ILevel} from '../models/ILevel';
import {IArea} from '../models/IArea';
import {IUser} from '../models/IUser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public addUserForm: FormGroup;
  public levels: ILevel[];
  public skills: string[];
  public areas: IArea[];
  public telMask: Array<string | RegExp>;
  public currUser: IUser;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.telMask = ['+', '3', '7', '5', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    forkJoin(
      this.userService.getAreas(),
      this.userService.getLevels(),
    ).subscribe(value => {
      [this.areas, this.levels] = value;

      this.skills = this.levels[0].skills;
      this.buildForm();

      this.userService.getCurrUser().subscribe(user => {
        this.currUser = user;
        this.addUserForm.patchValue(user);

        this.setSkillsByLevel(user.level);

        const skillCbs: FormControl[] = this.skills.map(skill => {
          const isMatchedSkill = user.skills.includes(skill);

          if (isMatchedSkill) {
            return new FormControl(true);
          }
          return new FormControl(false);
        });

        this.addUserForm.setControl('skills', this.fb.array(skillCbs));
      });
    });
  }

  private buildForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(/^\+375(29|33|44|25|17)-\d{3}-\d{2}-\d{2}$/),
      ]],
      level: [this.levels[0].title, [
        Validators.required,
      ]],
      areasToRelocate: [[]],
      skills: this.fb.array([], [
        Validators.required,
      ]),
    });

    const formArray = this.addUserForm.get('skills') as FormArray;
    this.skills.forEach(x => formArray.push(new FormControl(false)));

    this.addUserForm.get('level').valueChanges.subscribe(level => {
      this.setSkillsByLevel(level);
      const skillCbs: FormControl[] = this.skills.map(() => new FormControl(false));
      this.addUserForm.setControl('skills', this.fb.array(skillCbs));
    });
  }

  private setSkillsByLevel(level: string): void {
    this.skills = this.levels.find(item => item.title === level).skills;
  }

  get form(): FormGroup {
    return this.addUserForm;
  }

  onSubmit() {
    const skills = this.skills.filter((x, i) => !!this.addUserForm.value.skills[i]);
    const isEdit = !!this.currUser;
    let submitUser: Observable<any>;

    if (isEdit) {
      const updatedUser = {...this.addUserForm.value, id: this.currUser.id, skills};
      submitUser = this.userService.saveUser(updatedUser);
    } else {
      const newUser = {...this.addUserForm.value, skills};
      submitUser = this.userService.addUser(newUser);
    }

    submitUser.subscribe(() => {
      this.currUser = null;
      this.addUserForm.reset();
    });
  }

  onReadyToRelocateChange(event: MatSlideToggleChange) {
    if (!event.checked) {
      this.form.get('areasToRelocate').reset([]);
    }
  }
}
