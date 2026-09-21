import { Component, input } from '@angular/core';
import { TextVariant } from '../app_types/text_types';
import { cn } from '../../../utils/cn';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.css',
})
export class Text {
  cn = cn;
  variant = input<TextVariant>('body');
  class = input<string | undefined>('');
  text = input.required<string>();

  classes() {
    return cn(textVariants[this.variant()], this.class());
  }
}
export const textVariants = {
  // GLOBAL
  hero: 'font-heading font-bold text-3xl md:text-5xl',
  heading: 'font-heading font-semibold text-2xl md:text-4xl',
  subheading: 'font-heading font-bold text-sm md:text-base',
  body: 'font-body text-base text-muted',

  // DASHBOARD LAYOUT
  pageTitle: 'font-body font-bold text-xl md:text-2xl text-text',
  pageSubtitle: 'font-body text-sm text-muted',
  sectionTitle: 'font-body font-semibold text-sm md:text-base text-text',
  sectionAction: 'font-body text-xs font-medium text-primary cursor-pointer hover:underline',

  // DASHBOARD CARDS
  cardTitle: 'font-body font-semibold text-sm text-text',
  cardValue: 'font-body font-bold text-2xl md:text-3xl leading-none text-text',
  cardLabel: 'font-body text-xs text-muted',
  cardTrend: 'font-body text-[11px] font-medium',
  cardText: 'font-body text-sm text-muted',

  // DASHBOARD TABLES
  tableHeader: 'font-body text-[11px] font-semibold uppercase tracking-wider text-muted',
  tableCell: 'font-body text-sm text-text',
  tableCellMuted: 'font-body text-sm text-muted',

  // DASHBOARD LISTS
  listTitle: 'font-body text-sm font-semibold text-text',
  listSubtitle: 'font-body text-xs text-muted',
  listMeta: 'font-body text-[11px] text-muted',
  listValue: 'font-body text-sm font-semibold text-text',

  // DASHBOARD BADGES
  badge: 'font-body text-[11px] font-semibold',
  tag: 'font-body text-[10px] font-bold uppercase tracking-wider',

  // DASHBOARD HERO BANNER
  bannerTitle: 'font-body font-bold text-lg md:text-xl lg:text-2xl',
  bannerSubtitle: 'font-body text-xs md:text-sm',
  bannerStat: 'font-body font-bold text-lg md:text-xl leading-none',
  bannerStatLabel: 'font-body text-[11px]',

  // DASHBOARD CHARTS
  chartValue: 'font-body font-bold text-xl md:text-2xl text-text',
  chartLabel: 'font-body text-xs text-muted',
  chartGrowth: 'font-body text-xs font-semibold',

  // MISC
  timestamp: 'font-body text-[10px] text-muted',
  emptyState: 'font-body text-sm text-muted text-center',
  navLabel: 'font-body text-sm font-medium',
  navSection: 'font-body text-[10px] font-bold uppercase tracking-widest text-muted',
} as const;
