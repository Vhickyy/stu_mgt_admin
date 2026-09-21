import { Component, HostListener, inject, signal } from '@angular/core';
import { Table } from '../../../../shared/components/app-ui/table/table';
import { Icon } from '../../../../shared/components/app-ui/icon/icon';
import { ColumnDef } from '@tanstack/angular-table';
import { Student, User } from '../../../../core/models/users';
import { UsersService } from '../../users-service';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [Table, Icon, Text, CommonModule],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable {
  usersService = inject(UsersService);
  globalFilter = signal('');
  columns: ColumnDef<Student>[] = [
    {
      accessorKey: 'name',
      header: 'User',
      cell: (info) => info.getValue(),
    },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'university', header: 'School / University' },
    // { accessorKey: 'department', header: 'Department' },
    { accessorKey: 'joined', header: 'Joined' },
    { accessorKey: 'status', header: 'Status' },
    // { accessorKey: 'lastActive', header: 'Last Active' },
    { id: 'actions', header: 'Actions', cell: () => '' },
  ];

  statusClass(status: User['status']) {
    return {
      Active: 'bg-green-light text-green',
      Inactive: 'bg-amber-light text-amber',
      Banned: 'bg-rose-light text-rose',
    }[status];
  }

  // open = signal(false);

  // @HostListener('document:click')
  // onDocClick() {
  //   this.open.set(false);
  // }

  // toggle(event: Event) {
  //   event.stopPropagation();
  //   this.open.update((v) => !v);
  // }

  // select(action: 'deactivate' | 'delete' | 'view', event: Event) {
  //   event.stopPropagation();
  //   this.open.set(false);
  //   // this.action.emit(action);
  // }
}
