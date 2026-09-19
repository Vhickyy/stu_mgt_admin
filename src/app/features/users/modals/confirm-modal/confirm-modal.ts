import { Component, input, output, signal } from '@angular/core';
import { Text } from '../../../../shared/components/app-ui/text/text';

type ConfirmVariant = 'warning' | 'danger' | 'info';

@Component({
  selector: 'app-confirm-modal',
  imports: [Text],
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.css',
})
export class ConfirmModal {
  variant = input<ConfirmVariant>('warning');
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  confirmLabel = input('Confirm');
  requireTypedConfirmation = input<string | null>(null); // e.g. "DELETE"
  showReasonField = input(false);

  cancel = output<void>();
  confirm = output<string | undefined>(); // passes reason/typed text if relevant

  reasonText = signal('');
  typedConfirmation = signal('');

  iconWrapClass() {
    return {
      warning: 'bg-amber-light text-amber',
      danger: 'bg-rose-light text-rose',
      info: 'bg-purple-light text-purple',
    }[this.variant()];
  }

  confirmButtonClass() {
    return {
      warning: 'bg-rose hover:opacity-90',
      danger: 'bg-rose hover:opacity-90',
      info: 'bg-purple hover:opacity-90',
    }[this.variant()];
  }

  canConfirm() {
    const required = this.requireTypedConfirmation();
    return required ? this.typedConfirmation() === required : true;
  }

  onConfirm() {
    if (!this.canConfirm()) return;
    this.confirm.emit(this.showReasonField() ? this.reasonText() : undefined);
  }
}
