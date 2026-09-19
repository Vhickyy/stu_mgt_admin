import { Component } from '@angular/core';
import { Text } from '../../../../shared/components/app-ui/text/text';

@Component({
  selector: 'app-dash-lists-section',
  imports: [Text],
  templateUrl: './dash-lists-section.html',
  styleUrl: './dash-lists-section.css',
})
export class DashListsSection {
  topSchools = [
    { name: 'University of Lagos', users: 2458, pct: 100 },
    { name: 'Covenant University', users: 1923, pct: 78 },
    { name: 'University of Ibadan', users: 1684, pct: 68 },
    { name: 'Obafemi Awolowo University', users: 1512, pct: 61 },
    { name: 'Ahmadu Bello University', users: 1287, pct: 52 },
  ];

  topDepartments = [
    { name: 'Computer Science', users: 4842, pct: 100 },
    { name: 'Business Administration', users: 3962, pct: 82 },
    { name: 'Accounting', users: 2856, pct: 59 },
    { name: 'Mass Communication', users: 2341, pct: 48 },
    { name: 'Electrical Engineering', users: 2128, pct: 44 },
  ];

  activity = [
    { name: 'Daniel Okoro', action: 'Logged in · Web', time: '2 mins ago', dot: 'bg-green' },
    { name: 'Mary Uche', action: 'Added a new course', time: '15 mins ago', dot: 'bg-purple' },
    {
      name: 'Ahmed Bello',
      action: 'Updated profile information',
      time: '32 mins ago',
      dot: 'bg-amber',
    },
    { name: 'Sarah Michael', action: 'Viewed results', time: '1 hour ago', dot: 'bg-primary' },
    { name: 'Emeka Joseph', action: 'Logged in · Mobile', time: '2 hours ago', dot: 'bg-purple' },
  ];
}
