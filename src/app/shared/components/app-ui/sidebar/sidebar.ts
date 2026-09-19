import { Component, HostListener, Inject, PLATFORM_ID, signal, Type } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Icon, IconName } from '../icon/icon';
import { Text } from '../text/text';

interface NavItem {
  icon: IconName;
  label: string;
  route: string;
  exact: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, Icon, Text],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.onResize();
  }

  isCollapsed = signal(false);
  sidebarOpen = signal(false);

  isMobile = signal(false);

  toggleCollapse() {
    this.isCollapsed.update((v) => !v);
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth < 768);

    if (!this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  navItems = signal<NavItem[]>([
    { icon: 'home', label: 'Dashboard', route: '/dashboard', exact: true },
    { icon: 'users', label: 'Users', route: '/dashboard/users', exact: false },
    { icon: 'activity', label: 'User Activity', route: '/dashboard/activity', exact: true },
    {
      icon: 'building',
      label: 'Schools & Universities',
      route: '/dashboard/schools',
      exact: false,
    },
    // { icon: 'bookOpen', label: 'Courses', route: '/courses' },
    // { icon: 'creditCard', label: 'Subscriptions', route: '/dashboard/subscriptions' },
    { icon: 'chartCol', label: 'Analytics', route: '/dashboard/analytics', exact: true },
    // { icon: 'bell', label: 'Reports', route: '/dashboard/reports' },
    { icon: 'settings', label: 'Settings', route: '/dashboard/settings', exact: true },
  ]);
}
