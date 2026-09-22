import { Component, computed, input, signal } from '@angular/core';
import { Icon } from '../../../../shared/components/app-ui/icon/icon';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { Button } from '../../../../shared/components/app-ui/button/button';

@Component({
  selector: 'app-single-role',
  imports: [Icon, Text, RouterLink, Button],
  templateUrl: './single-role.html',
  styleUrl: './single-role.css',
})
export class SingleRole {
  id = input.required<string>();
  roleRes = httpResource(() => `http://localhost:3001/api/v1/admin/roles/${this.id()}`, {
    parse: (response: any) => response.data,
  });

  permissions = computed(() => Object.keys(this.roleRes.value()?.permissions));
}
