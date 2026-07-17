import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartData,
  ChartOptions,
  ChartType,
  Chart,
  registerables
} from 'chart.js';

// Register all chart elements (Fixes the bug where the chart does not render)
Chart.register(...registerables);

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './radar-chart.html'
})
export class RadarChartComponent {

  radarChartType: 'radar' = 'radar';

  radarChartData: ChartData<'radar'> = {
    labels: [
      'Traffic',
      'Engagement',
      'Conversions',
      'Content Performance',
      'User Experience',
      'Acquisition'
    ],
    datasets: [
      {
        label: 'This Period',
        data: [80, 85, 75, 60, 90, 70],
        backgroundColor: 'rgba(56, 189, 248, 0.2)', // Light blue
        borderColor: '#38bdf8',
        pointBackgroundColor: '#38bdf8',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#38bdf8',
        fill: true,
        borderWidth: 1.5,
      },
      {
        label: 'Previous Period',
        data: [65, 70, 80, 50, 75, 60],
        backgroundColor: 'rgba(167, 139, 250, 0.1)', // Purple/Indigo
        borderColor: '#a78bfa',
        pointBackgroundColor: '#a78bfa',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#a78bfa',
        fill: true,
        borderWidth: 1.5,
        borderDash: [5, 5], // Dashed line to match green/purple previous period style
      }
    ]
  };

  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        pointLabels: {
          color: '#6b7280',
          font: {
            size: 11,
            family: "'Inter', sans-serif"
          }
        },
        ticks: {
          display: false
        },
        max: 100,
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
          padding: 20,
          color: '#6b7280',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      }
    }
  };

}