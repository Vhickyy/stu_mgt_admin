import { httpResource } from '@angular/common/http';
import { computed, Service } from '@angular/core';

@Service()
export class RolesPermissionService {
  rolesRes = httpResource(() => 'http://localhost:3001/api/v1/admin/roles', {
    parse: (response: any) => {
      return response.data;
    },
  });

  getRole(id: string) {
    return httpResource(() => `http://localhost:3001/api/v1/admin/roles/${id}`, {
      parse: (response: any) => response.data,
    });
  }

  roles = computed(() => {
    const roles = this.rolesRes.value()?.roles;
    console.log({ roles });

    if (!roles) return [];
    console.log({ roles });

    return roles;
  });
}
