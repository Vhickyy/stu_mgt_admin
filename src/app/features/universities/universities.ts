import { Component, inject } from '@angular/core';
import { UniversityService } from './university-service';
import { Text } from '../../shared/components/app-ui/text/text';
import { UniversityTable } from './components/university-table/university-table';
import { StatCard } from '../../shared/components/dash_ui/stat-card/stat-card';

@Component({
  selector: 'app-universities',
  imports: [Text, UniversityTable, StatCard],
  templateUrl: './universities.html',
  styleUrl: './universities.css',
})
export class Universities {
  universityService = inject(UniversityService);
  universities = this.universityService.universitiesRes;
}
