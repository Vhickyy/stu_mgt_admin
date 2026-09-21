import { Component, input } from '@angular/core';
import { Text } from '../../app-ui/text/text';
import { Icon, IconName } from '../../app-ui/icon/icon';

export type StatColor = 'primary' | 'purple' | 'amber' | 'green' | 'rose';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [Text, Icon],
  templateUrl: './stat-card.html',
})
export class StatCard {
  icon = input.required<IconName>();
  label = input.required<string>();
  value = input.required<string>();
  trend = input<string>();
  color = input<StatColor>('primary');

  iconBg() {
    return {
      primary: 'bg-primary-light text-primary',
      purple: 'bg-purple-light text-purple',
      amber: 'bg-amber-light text-amber',
      green: 'bg-green-light text-green',
      rose: 'bg-rose-light text-rose',
    }[this.color()];
  }
}
