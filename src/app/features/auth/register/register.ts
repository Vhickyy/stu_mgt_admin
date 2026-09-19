import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Text } from '../../../shared/components/app-ui/text/text';
import { Input } from '../../../shared/components/app-ui/input/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [Button, Text, Input, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerModel = signal<IRegisterAdmin>({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel);
}
