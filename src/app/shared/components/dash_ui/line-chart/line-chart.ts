import { Component, input, computed } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.html',
})
export class LineChart {
  data = input.required<number[]>();
  categories = input.required<string[]>();
  color = input<string>('#F0623D');
  height = input<number>(150);

  chartOptions = computed<ApexOptions>(() => ({
    series: [{ name: 'Value', data: this.data() }],
    chart: {
      type: 'area',
      height: this.height(),
      toolbar: { show: false },
      zoom: { enabled: false },
      width: '100%',
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2.5, colors: [this.color()] },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    colors: [this.color()],
    grid: {
      borderColor: '#ECE9E4',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: this.categories(),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#8B8783', fontSize: '11px' } },
    },
    yaxis: {
      labels: {
        style: { colors: '#8B8783', fontSize: '11px' },
        formatter: (val: number) => `${Math.round(val / 1000)}K`,
      },
    },
    tooltip: { theme: 'light', x: { show: true } },
    markers: { size: 0, hover: { size: 5 } },
  }));
}
