import { Component, inject, signal } from '@angular/core';
import { IconName } from '../../shared/components/app-ui/icon/icon';
import { Text } from '../../shared/components/app-ui/text/text';
import { StatCard, StatColor } from '../../shared/components/dash_ui/stat-card/stat-card';
import { UsersService } from './users-service';
import { User } from '../../core/models/users';
import { UserTable } from './components/user-table/user-table';
import { ConfirmModal } from './modals/confirm-modal/confirm-modal';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Text, StatCard, UserTable, ConfirmModal],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  usersService = inject(UsersService);

  globalFilter = signal('');
  activeModal = signal<'deactivate' | 'delete' | null>(null);
  activeUser = signal<User | null>(null);

  stats: { icon: IconName; label: string; value: string; trend: string; color: StatColor }[] = [
    {
      icon: 'users',
      label: 'Total Users',
      value: '24,582',
      trend: '↑ 12.6%',
      color: 'primary' as const,
    },
    {
      icon: 'trendingUp',
      label: 'Active Users',
      value: '8,742',
      trend: '↑ 9.3%',
      color: 'purple' as const,
    },
    {
      icon: 'userPlus',
      label: 'New Users (This Week)',
      value: '1,256',
      trend: '↑ 14.8%',
      color: 'amber' as const,
    },
    { icon: 'ban', label: 'Banned Users', value: '142', trend: '↓ 2.1%', color: 'rose' as const },
  ];

  closeModal() {
    this.activeModal.set(null);
    this.activeUser.set(null);
  }

  confirmDeactivate() {
    const user = this.activeUser();
    if (user) this.usersService.deactivate(user.id);
    this.closeModal();
  }

  confirmDelete() {
    const user = this.activeUser();
    if (user) this.usersService.delete(user.id);
    this.closeModal();
  }
}
