import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./shared/layout/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./features/auth/register/register').then((m) => m.Register),
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./features/auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./features/auth/reset-password/reset-password').then((m) => m.ResetPassword),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/layout/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'users',
        children: [
          { path: '', loadComponent: () => import('./features/users/users').then((m) => m.Users) },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/users/pages/user-id/user-id').then((m) => m.UserId),
          },
        ],
      },
      {
        path: 'admins',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/admins/admins').then((m) => m.Admins),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/admin-request/admin-request').then((m) => m.AdminRequest),
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
          },
          {
            path: 'manage-roles',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./features/roles-permission/roles-permission').then(
                    (m) => m.RolesPermission,
                  ),
              },
              {
                path: ':id',
                loadComponent: () =>
                  import('./features/roles-permission/pages/single-role/single-role').then(
                    (m) => m.SingleRole,
                  ),
              },
            ],
          },
        ],
      },
      {
        path: 'universities',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/universities/universities').then((m) => m.Universities),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/universities/pages/university-id/university-id').then(
                (m) => m.UniversityId,
              ),
          },
        ],
      },
    ],
  },
];
