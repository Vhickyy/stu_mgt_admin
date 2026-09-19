import { Component, input } from '@angular/core';
import { Text } from '../text/text';

@Component({
  selector: 'app-button',
  imports: [Text],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  text = input.required<string>();
  class = input<string>('');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
}
