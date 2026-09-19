import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnDef } from '@tanstack/angular-table';
import { ActivityLog } from '../../../../core/models/users';
import { UsersService } from '../../users-service';
import { ConfirmModal } from '../../modals/confirm-modal/confirm-modal';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { Modal } from '../../../../shared/components/app-ui/modal/modal';
import { Table } from '../../../../shared/components/app-ui/table/table';
import { Icon } from '../../../../shared/components/app-ui/icon/icon';

type TabId = 'overview' | 'activity' | 'academic' | 'subscription' | 'security';

@Component({
  selector: 'app-user-id',
  imports: [ConfirmModal, Text, Modal, Table, Icon],
  templateUrl: './user-id.html',
  styleUrl: './user-id.css',
})
export class UserId {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usersService = inject(UsersService);

  // icons = ICONS;
  activeTab = signal<TabId>('overview');

  userId = this.route.snapshot.paramMap.get('id')!;
  user = computed(() => this.usersService.users().find((u) => u.id === this.userId));
  logs = this.usersService.logs;

  tabs: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'activity', label: 'Activity' },
    { id: 'academic', label: 'Academic Overview' },
    { id: 'subscription', label: 'Subscription' },
    { id: 'security', label: 'Security' },
  ];

  logColumns: ColumnDef<ActivityLog>[] = [
    { accessorKey: 'action', header: 'Action' },
    { accessorKey: 'platform', header: 'Platform' },
    { accessorKey: 'device', header: 'Device' },
    { accessorKey: 'location', header: 'Location' },
    { accessorKey: 'time', header: 'Time' },
    { accessorKey: 'ip', header: 'IP Address' },
    { id: 'details', header: 'Details' },
  ];

  // modal state
  activeModal = signal<'deactivate' | 'delete' | 'impersonate' | 'logoutAll' | null>(null);
  deviceModalLog = signal<ActivityLog | null>(null);
  locationModalLog = signal<ActivityLog | null>(null);

  actionDotClass(color: ActivityLog['actionColor']) {
    return { green: 'bg-green', purple: 'bg-purple', amber: 'bg-amber', rose: 'bg-rose' }[color];
  }

  onHeaderMenuAction(action: 'deactivate' | 'delete') {
    if (action === 'deactivate' || action === 'delete') {
      this.activeModal.set(action);
    }
  }

  closeModal() {
    this.activeModal.set(null);
  }

  confirmDeactivate() {
    this.usersService.deactivate(this.userId);
    this.closeModal();
  }

  confirmDelete() {
    this.usersService.delete(this.userId);
    this.closeModal();
    this.router.navigate(['/users']);
  }

  confirmLogoutAll() {
    // call your session-invalidation endpoint here
    this.closeModal();
  }
}
