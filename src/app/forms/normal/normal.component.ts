import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from '../../shared/services/message.service';
import { IAppConstans } from '../../shared/utils/interfaces/app-constants-interface';
import { APP_CONSTANS } from '../../shared/utils/app.constats';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.scss',
})
export class NormalComponent implements OnInit {
  form!: FormGroup;
  userNames: string[];

  constructor(
    @Inject(APP_CONSTANS) private constants: IAppConstans,
    private fb: FormBuilder,
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {
    this.userNames = constants.USERNAMES;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      body: ['', [Validators.required, Validators.minLength(3)]],
      userId: [1],
    });
  }

  submitForm(): void {
    const values = this.form.value;
    this.messageService.addMessage(values).subscribe({
      complete: () => {
        // Handle successful addition
        this.showSnackbar('Sikeres a bejegyzés hozzáadása!');
      },
      error: (err) => {
        this.showSnackbar(err.message, false);
      },
    });
  }

  private showSnackbar(message: string, isOK: boolean = true): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isOK ? ['success'] : ['warning'],
    });
  }

  getErrorMessage(fieldName: string): string {
    const form: FormControl = this.form.get(fieldName) as FormControl;

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
