import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';
import { ToastService } from '../service/toast.service';
import { Login } from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public errorMsg: string = '';

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false),
  });

  constructor(
    private authService: AuthService,
    private toast: ToastService,
    private local: LocalStorageService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.errorMsg = '';
    const formData: Login = this.loginForm.value;
    this.authService.login(formData).subscribe({
      next: (res: { token: string }) => {
        console.log(res);
        if (formData.remember) {
          this.local.setToken(res.token);
        }
        this.authService.tokenSubject.next(res.token);
        this.toast.success('login successfully');
        this.route.navigate(['/profile']);
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error(err.error?.message || 'Invalid username or password');
        this.errorMsg = 'Invalid username or password';
      },
    });
  }
}
