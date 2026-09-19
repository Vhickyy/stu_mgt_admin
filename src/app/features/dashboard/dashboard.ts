// dashboard.ts
import { Component } from '@angular/core';
import { Text } from '../../shared/components/app-ui/text/text';
import { StatCard, StatColor } from '../../shared/components/dash_ui/stat-card/stat-card';
import { IconName } from '../../shared/components/app-ui/icon/icon';
import { DashCharts } from './components/dash-charts/dash-charts';
import { DashListsSection } from './components/dash-lists-section/dash-lists-section';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Text, StatCard, DashCharts, DashListsSection],
  templateUrl: './dashboard.html',
})
export class Dashboard {
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
      icon: 'arrowRightLeft',
      label: 'Logins (This Week)',
      value: '56,391',
      trend: '↑ 15.7%',
      color: 'amber' as const,
    },
    {
      icon: 'school',
      label: 'Schools Tracked',
      value: '1,248',
      trend: '↑ 5.4%',
      color: 'green' as const,
    },
    {
      icon: 'bookOpen',
      label: 'Departments',
      value: '4,326',
      trend: '↑ 6.8%',
      color: 'rose' as const,
    },
  ];

  insights = [
    'Most students on StudentHub attend University of Lagos.',
    'Computer Science is the most popular department.',
    'Mobile users increased by 11.3% this week.',
    'Logins peak on Wednesdays.',
  ];
}
