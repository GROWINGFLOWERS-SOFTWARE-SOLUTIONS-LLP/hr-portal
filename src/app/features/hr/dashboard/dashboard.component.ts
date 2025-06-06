import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
   imports: [CommonModule, CardModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
activeSection: string = 'Dashboard';
pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
};

barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

  pieChartData: any;
  barChartData: any;

  ngOnInit() {
    this.pieChartData = {
      labels: ['Registered', 'Mapped', 'Interviewed', 'Hold', 'Offer'],
      datasets: [
        {
          data: [12, 9, 2, 1, 5],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#FF8A65']
        }
      ]
    };

    this.barChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Hires',
          backgroundColor: '#42A5F5',
          data: [5, 7, 3, 6, 4]
        },
        {
          label: 'Interviews',
          backgroundColor: '#66BB6A',
          data: [8, 4, 6, 7, 3]
        }
      ]
      
    };
  }
}