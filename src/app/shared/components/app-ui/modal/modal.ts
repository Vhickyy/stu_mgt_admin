import { Component, input, output } from '@angular/core';
import { Text } from '../text/text';
import { LucideDynamicIcon } from '@lucide/angular';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [Text, Icon],
  templateUrl: './modal.html',
})
export class Modal {
  title = input<string>('');
  size = input<'sm' | 'md' | 'lg'>('md');
  close = output<void>();

  sizeClass() {
    return { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' }[this.size()];
  }
}

// import { Component, input, model } from '@angular/core';
// import { Text } from '../text/text';
// import { Icon } from "../icon/icon";

// @Component({
//   selector: 'app-modal',
//   imports: [Text, Icon],
//   templateUrl: './modal.html',
//   styleUrl: './modal.css',
// })
// export class Modal {
//   header = input.required();
//   subHeader = input();
//   openModal = model<boolean>(false);
// }
