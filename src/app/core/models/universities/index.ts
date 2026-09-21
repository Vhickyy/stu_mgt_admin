interface IUniversitiesResponse {
  universities: IUniversity[];
  stats: IUniversityStats;
}

interface IUniversity {
  university_id: string;
  university_name: string;
  university_country: string;
  university_stateProvince: string | null;
  university_domains: string[];
  university_webPages: string[];
  studentCount: number;
  activeStudentCount: number;
  inactiveStudentCount: number;
}

interface IUniversityStats {
  totalSchools: number;
  totalStudents: number;
  activeStudents: number;
  inactiveStudents: number;
}
