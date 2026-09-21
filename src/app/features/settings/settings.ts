import { Component } from '@angular/core';
import { Text } from '../../shared/components/app-ui/text/text';
import { Icon, IconName } from '../../shared/components/app-ui/icon/icon';
import { Button } from '../../shared/components/app-ui/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [Text, Icon, Button, RouterLink],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  settingsCard = [
    {
      icon: 'settings' as IconName,
      title: 'General',
      sub: 'Manage studenthub settings and configuration.',
      link: '',
    },
    {
      icon: 'users' as IconName,
      title: 'Admin Mangement',
      sub: 'Manage administartion registration and assign roles.',
      link: '/dashboard/admins',
    },
    {
      icon: 'bell' as IconName,
      title: 'Notification',
      sub: 'Configure notification and alerts.',
      link: '',
    },
    {
      icon: 'bell' as IconName,
      title: 'Roles & Permissions',
      sub: 'Create roles and control access to admin features',
      link: '/dashboard/settings/manage-roles',
    },
  ];
}
