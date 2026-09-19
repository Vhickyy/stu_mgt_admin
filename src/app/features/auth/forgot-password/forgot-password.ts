import { Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Input } from '../../../shared/components/app-ui/input/input';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Text } from '../../../shared/components/app-ui/text/text';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Icon } from '../../../shared/components/app-ui/icon/icon';

@Component({
  selector: 'app-forgot-password',
  imports: [Input, Button, Text, Icon, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  forgotPasswordModel = signal({
    email: '',
  });

  forgotPasswordForm = form(this.forgotPasswordModel);
  router = inject(Router);
}
