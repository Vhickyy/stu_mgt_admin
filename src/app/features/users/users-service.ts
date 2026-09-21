import { inject, OnInit, Service, signal } from '@angular/core';
import { ActivityLog, User, Student } from '../../core/models/users';
import { HttpClient, httpResource } from '@angular/common/http';

@Service()
export class UsersService {
  //   httpStudents = httpResource(() => 'http://localhost:3000/students');

  // constructor() {
  //   effect(() => {
  //     const students = this.httpStudents.value();

  //     if (students) {
  //       console.log(students);
  //     }
  //   });
  // }

  httpStudents = httpResource<Student[]>(() => 'http://localhost:3001/api/v1/students', {
    parse(response: any) {
      console.log(response);
      return response.data.map((student: Student) => ({
        id: student.id,
        email: student.email,
        fullName: student.profile.fullName,
        phoneNumber: student.profile.phoneNumber,
        admissionYear: student.profile.admissionYear,
        university: student.profile.university.name,
        status: student.isVerifiedEmail ? 'Verified' : 'Unverified',
        createdAt: student.profile.createdAt,
      }));
    },
  });

  users = signal<User[]>([
    {
      id: '1',
      studentId: '#STU-00045',
      name: 'Daniel Okoro',
      email: 'daniel.okoro@example.com',
      avatar: 'https://i.pravatar.cc/40?u=daniel',
      school: 'University of Lagos',
      department: 'Computer Science',
      joined: 'May 17, 2025',
      status: 'Active',
      lastActive: '2 mins ago',
    },
    {
      id: '2',
      studentId: '#STU-00046',
      name: 'Mary Uche',
      email: 'mary.uche@example.com',
      avatar: 'https://i.pravatar.cc/40?u=mary',
      school: 'Covenant University',
      department: 'Business Admin',
      joined: 'May 17, 2025',
      status: 'Active',
      lastActive: '15 mins ago',
    },
    {
      id: '3',
      studentId: '#STU-00047',
      name: 'Ahmed Bello',
      email: 'ahmed.bello@example.com',
      avatar: 'https://i.pravatar.cc/40?u=ahmed',
      school: 'Ahmadu Bello University',
      department: 'Electrical Engineering',
      joined: 'May 16, 2025',
      status: 'Inactive',
      lastActive: '2 days ago',
    },
    {
      id: '4',
      studentId: '#STU-00048',
      name: 'Sarah Michael',
      email: 'sarah.michael@example.com',
      avatar: 'https://i.pravatar.cc/40?u=sarah',
      school: 'University of Ibadan',
      department: 'Mass Communication',
      joined: 'May 16, 2025',
      status: 'Active',
      lastActive: '1 hour ago',
    },
    {
      id: '5',
      studentId: '#STU-00049',
      name: 'Emeka Joseph',
      email: 'emeka.joseph@example.com',
      avatar: 'https://i.pravatar.cc/40?u=emeka',
      school: 'Obafemi Awolowo University',
      department: 'Accounting',
      joined: 'May 16, 2025',
      status: 'Active',
      lastActive: '3 hours ago',
    },
  ]);

  deactivate(id: string) {
    this.users.update((list) => list.map((u) => (u.id === id ? { ...u, status: 'Inactive' } : u)));
  }

  delete(id: string) {
    this.users.update((list) => list.filter((u) => u.id !== id));
  }

  logs = signal<ActivityLog[]>([
    {
      id: '1',
      action: 'Logged in',
      actionColor: 'green',
      platform: 'Web',
      device: 'Chrome - Windows',
      deviceType: 'Web Browser',
      browser: 'Google Chrome',
      browserVersion: '124.0.0.0',
      os: 'Windows 10',
      screenResolution: '1920 x 1080',
      location: 'Lagos, Nigeria',
      country: 'Nigeria',
      region: 'Lagos State',
      city: 'Lagos',
      isp: 'MTN Nigeria Communications',
      time: 'May 17, 2025 · 10:24 AM',
      ip: '197.210.45.12',
    },
    {
      id: '2',
      action: 'Added a course',
      actionColor: 'purple',
      platform: 'Android',
      device: 'Samsung Galaxy S23',
      deviceType: 'Mobile',
      browser: 'App',
      browserVersion: '3.2.1',
      os: 'Android 14',
      screenResolution: '1080 x 2340',
      location: 'Abuja, Nigeria',
      country: 'Nigeria',
      region: 'FCT',
      city: 'Abuja',
      isp: 'Airtel Nigeria',
      time: 'May 17, 2025 · 10:15 AM',
      ip: '102.88.12.45',
    },
    {
      id: '3',
      action: 'Uploaded results',
      actionColor: 'amber',
      platform: 'iOS',
      device: 'iPhone 14',
      deviceType: 'Mobile',
      browser: 'App',
      browserVersion: '3.2.1',
      os: 'iOS 17',
      screenResolution: '1170 x 2532',
      location: 'Kano, Nigeria',
      country: 'Nigeria',
      region: 'Kano State',
      city: 'Kano',
      isp: 'Glo Mobile',
      time: 'May 17, 2025 · 9:56 AM',
      ip: '105.112.76.78',
    },
    {
      id: '4',
      action: 'Logged out',
      actionColor: 'rose',
      platform: 'Web',
      device: 'Chrome - Windows',
      deviceType: 'Web Browser',
      browser: 'Google Chrome',
      browserVersion: '124.0.0.0',
      os: 'Windows 10',
      screenResolution: '1920 x 1080',
      location: 'Lagos, Nigeria',
      country: 'Nigeria',
      region: 'Lagos State',
      city: 'Lagos',
      isp: 'MTN Nigeria Communications',
      time: 'May 17, 2025 · 9:12 AM',
      ip: '197.210.45.12',
    },
  ]);
}
