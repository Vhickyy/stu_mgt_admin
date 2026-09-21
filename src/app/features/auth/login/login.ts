import { Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Text } from '../../../shared/components/app-ui/text/text';
import { Input } from '../../../shared/components/app-ui/input/input';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Text, Input, Button, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<ILoginAdmin>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel);
  router = inject(Router);
}
