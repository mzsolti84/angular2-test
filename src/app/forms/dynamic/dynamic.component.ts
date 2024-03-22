import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss',
})
export class DynamicComponent {
  dynamicForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      body: ['', [Validators.required, Validators.minLength(3)]],
      users: this.fb.array([]),
    });
  }

  get userForm(): FormArray {
    return this.dynamicForm.get('users') as FormArray;
  }

  addUser() {
    const autoId = this.userForm.length + 1;
    const user = this.fb.group({
      userId: autoId,
      name: '',
    });

    this.userForm.push(user);
  }

  deleteUser(i: number): void {
    this.userForm.removeAt(i);
  }

  getErrorMessage(fieldName: string): string {
    const form: FormControl = this.dynamicForm.get(fieldName) as FormControl;

    if (!form) {
      return '';
    }

    if (form.hasError('required')) {
      return 'Kötelezően kitöltenőd mező!';
    } else if (form.hasError('minlength')) {
      return 'Minimum 3 karakter szükséges!';
    } else if (form.hasError('maxlength')) {
      return 'Maximum 100 karakter lehet!';
    }

    return '';
  }

  get errorMessageTitle(): string {
    return this.getErrorMessage('title');
  }

  get errorMessageBody(): string {
    return this.getErrorMessage('body');
  }
}
