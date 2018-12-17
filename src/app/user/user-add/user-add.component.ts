import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material';
import {forkJoin} from 'rxjs';

import {UserService} from '../user.service';
import {ILevel} from '../ILevel';
import {IArea} from '../IArea';

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
    });
  }

  private buildForm() {
    this.addUserForm = this.fb.group({
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,
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

    this.addUserForm.get('level').valueChanges.subscribe(levelTitle => {
      this.skills = this.levels.find(level => level.title === levelTitle).skills;
    });
  }

  onSubmit() {
    this.userService.addUser(this.addUserForm.value).subscribe(() => {
      this.addUserForm.reset();
    });
  }

  onSkillChange(event: MatCheckboxChange, index: number) {
    const skills = <FormArray>this.addUserForm.get('skills');

    if (event.checked) {
      skills.push(new FormControl(event.source.value));
    } else {
      skills.removeAt(index);
    }
  }

}
