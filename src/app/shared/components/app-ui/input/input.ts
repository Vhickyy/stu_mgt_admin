import { Component, input } from '@angular/core';
import { Icon, IconName } from '../icon/icon';
import { Field, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [Icon, FormField],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  label = input<string>();
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'password'>('text');
  leftIcon = input<IconName>();
  rightIcon = input<IconName>();
  id = input.required();
  field = input.required<Field<any, string | number>>();
}
