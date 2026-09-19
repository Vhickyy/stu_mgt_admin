import { Component } from '@angular/core';
import { Text } from '../../../../shared/components/app-ui/text/text';
import { LineChart } from '../../../../shared/components/dash_ui/line-chart/line-chart';

@Component({
  selector: 'app-dash-charts',
  imports: [Text, LineChart],
  templateUrl: './dash-charts.html',
  styleUrl: './dash-charts.css',
})
export class DashCharts {
  chartCategories = ['May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17'];
  userGrowthData = [15000, 18500, 21200, 23100, 24000, 25800, 24582];
  loginsData = [12000, 18400, 24600, 31200, 38900, 46500, 56391];
}
