import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public addUserForm: FormGroup;

  public userLevels: string[] = ['L1', 'L2', 'L3'];
  public areasToRelocate: string[] = ['USA', 'Spain', 'France', 'China', 'Japan'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        // Validators.email,
      ]],
      phoneNumber: ['', [
        Validators.required,
      ]],
      level: [this.userLevels[0], [
        Validators.required,
      ]],
      areasToRelocate: [[], [
        Validators.required,
      ]],
    });
  }

  onSubmit() {
    // TODO: save user
  }
}
