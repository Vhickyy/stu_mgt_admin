import { httpResource } from '@angular/common/http';
import { computed, Service, signal, Signal } from '@angular/core';
import { IconName } from '../../shared/components/app-ui/icon/icon';
import { StatColor } from '../../shared/components/dash_ui/stat-card/stat-card';

@Service()
export class UniversityService {
  search = signal('');
  universitiesRes = httpResource<IUniversitiesResponse>(
    () => `http://localhost:3001/api/v1/admin/universities?search=${this.search()}`,
    {
      parse: (response: any) => {
        return response.data;
      },
    },
  );

  stats: Signal<
    { icon: IconName; label: string; value: string; trend: string; color: StatColor }[]
  > = computed(() => {
    const stats = this.universitiesRes.value()?.stats;

    if (!stats) {
      return [];
    }

    const activeStudentPerecent = (stats.activeStudents / stats.totalStudents) * 100;
    const inActiveStudentPerecent = (stats.activeStudents / stats.totalStudents) * 100;

    return [
      {
        icon: 'building',
        label: 'Total Universities',
        value: stats.totalSchools.toLocaleString(),
        trend: 'in StudentHub',
        color: 'primary' as const,
      },
      {
        icon: 'users',
        label: 'Total Students',
        value: stats.totalStudents.toLocaleString(),
        trend: '100% of our users',
        color: 'purple' as const,
      },
      {
        icon: 'userPlus',
        label: 'Active Students',
        value: stats.activeStudents.toLocaleString(),
        trend: `${activeStudentPerecent}% of our users`,
        color: 'amber' as const,
      },
      {
        icon: 'ban',
        label: 'Inactive Students',
        value: stats.inactiveStudents.toLocaleString(),
        trend: `${inActiveStudentPerecent}% of our users`,
        color: 'rose' as const,
      },
    ];
  });
}
