import { httpResource } from '@angular/common/http';
import { computed, Service } from '@angular/core';

@Service()
export class RolesPermissionService {
  httpRoles = httpResource(() => 'http://localhost:3001/api/v1/admin/roles', {
    parse: (response: any) => {
      return response.data;
    },
  });

  roles = computed(() => {
    const roles = this.httpRoles.value()?.roles;
    console.log({ roles });

    if (!roles) return [];
    console.log({ roles });

    return roles;
  });
}
