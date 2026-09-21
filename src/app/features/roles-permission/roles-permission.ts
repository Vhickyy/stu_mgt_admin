import { Component, inject } from '@angular/core';
import { Text } from '../../shared/components/app-ui/text/text';
import { Icon } from '../../shared/components/app-ui/icon/icon';
import { RouterLink } from '@angular/router';
import { RolesPermissionService } from './roles-permission-service';

@Component({
  selector: 'app-roles-permission',
  imports: [Text, Icon, RouterLink],
  templateUrl: './roles-permission.html',
  styleUrl: './roles-permission.css',
})
export class RolesPermission {
  rolesService = inject(RolesPermissionService);
}
