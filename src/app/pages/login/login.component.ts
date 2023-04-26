import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from 'src/app/config/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailInputSelected = false;
  senhaInputSelected = false;
  loading = false;
  message = 'Entrar';
  errorMessage = '';
  error = false;
  responseData: any = [];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  validation() {
    this.error = false;
    if (this.loginForm.status === 'INVALID') {
      this.error = true;
      if (this.loginForm.controls.email.status === 'INVALID') {
        this.errorMessage = 'Informe um e-mail válido'
      } else {
        this.errorMessage = 'Informe a senha'
      }
      return false;
    }
    return true;
  }

  constructor(private userService: UserService, private router: Router) { }

  async login(data: any) {
    this.userService.userLogin(data).subscribe(
      response => {
        this.responseData = response;
        localStorage.setItem('token', this.responseData.access_token)
        this.router.navigate(['/main']);
      },
      error => {
        this.errorMessage = 'E-mail ou senha incorretos.'
        this.error = true;
        this.message = 'Entrar';
        this.loading = false;
        console.log(error)
      });;
  }

  loginHandler(): void {
    if (this.validation()) {
      this.message = 'Entrando...';
      this.loading = true;
      const data = this.loginForm.value;
      this.login(data)
      this.loginForm.controls.email.setValue('');
      this.loginForm.controls.password.setValue('');
    }
  }
}
