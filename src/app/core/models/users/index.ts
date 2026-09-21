export interface User {
  id: string;
  studentId: string;
  name: string;
  email: string;
  avatar: string;
  school: string;
  department: string;
  joined: string;
  status: 'Active' | 'Inactive' | 'Banned';
  lastActive: string;
}
export interface Student {
  id: string;
  email: string;
  isVerifiedEmail: boolean;
  profile: {
    id: string;
    fullName: string;
    phoneNumber: string;
    admissionYear: number;
    university: {
      name: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface ActivityLog {
  id: string;
  action: string;
  actionColor: 'green' | 'purple' | 'amber' | 'rose';
  platform: 'Web' | 'Android' | 'iOS';
  device: string;
  deviceType: string;
  browser: string;
  browserVersion: string;
  os: string;
  screenResolution: string;
  location: string;
  country: string;
  region: string;
  city: string;
  isp: string;
  time: string;
  ip: string;
}
