import { Component, signal } from '@angular/core';
import { Button } from '../../../shared/components/app-ui/button/button';
import { Input } from '../../../shared/components/app-ui/input/input';
import { Text } from '../../../shared/components/app-ui/text/text';
import { form } from '@angular/forms/signals';
import { Icon } from '../../../shared/components/app-ui/icon/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [Button, Input, Text, Icon, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  resetPasswordModel = signal<IResetPassword>({ newPassword: '', confirmPassword: '' });
  resetPasswordForm = form(this.resetPasswordModel);
}
