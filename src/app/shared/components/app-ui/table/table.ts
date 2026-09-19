import { Component, TemplateRef, input } from '@angular/core';
import {
  ColumnDef,
  createAngularTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  FlexRenderDirective,
} from '@tanstack/angular-table';
import { NgTemplateOutlet } from '@angular/common';
// import { ICONS } from '../shared/icons';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FlexRenderDirective, NgTemplateOutlet],
  templateUrl: './table.html',
})
export class Table<T> {
  data = input.required<T[]>();
  columns = input.required<ColumnDef<T>[]>();
  globalFilter = input<string>('');
  pageSize = input<number>(10);

  cellTemplates = input<Record<string, TemplateRef<{ $implicit: T }>>>({});

  // icons = ICONS;

  table = createAngularTable(() => ({
    data: this.data(),
    columns: this.columns(),
    state: { globalFilter: this.globalFilter() },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: this.pageSize() } },
  }));
}
