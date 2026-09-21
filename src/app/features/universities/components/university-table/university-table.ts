import { Component, inject, signal } from '@angular/core';
import { Icon } from '../../../../shared/components/app-ui/icon/icon';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { Table } from '../../../../shared/components/app-ui/table/table';
import { ColumnDef } from '@tanstack/angular-table';
import { User } from '../../../../core/models/users';
import { UniversityService } from '../../university-service';

@Component({
  selector: 'app-university-table',
  imports: [Icon, Text, Table],
  templateUrl: './university-table.html',
  styleUrl: './university-table.css',
})
export class UniversityTable {
  universityService = inject(UniversityService);
  globalFilter = signal('');
  columns: ColumnDef<IUniversity>[] = [
    {
      accessorKey: 'university_name',
      header: 'University',
    },
    { accessorKey: 'university_country', header: 'Country' },
    { accessorKey: 'studentCount', header: 'Total Students' },
    { accessorKey: 'activeStudentCount', header: 'Active Students' },
    { accessorKey: 'inactiveStudentCount', header: 'Inactive Students' },
    { id: 'actions', header: 'Actions', cell: () => '' },
  ];

  statusClass(status: User['status']) {
    return {
      Active: 'bg-green-light text-green',
      Inactive: 'bg-amber-light text-amber',
      Banned: 'bg-rose-light text-rose',
    }[status];
  }
}
