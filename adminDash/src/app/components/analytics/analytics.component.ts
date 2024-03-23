import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics/analytics.service';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AnalyticsItem } from '../../models/ianalytics';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
})
export class AnalyticsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  linechart: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Monthly Financial Analytics',
    },
    xAxis: {
      categories: ['January 2023', 'February 2023', 'March 2023'],
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
      },
    },
    series: [
      {
        name: 'Total Cost',
        data: [500, 600, 550],
        type: 'line',
      },
      {
        name: 'Total Income',
        data: [1200, 1400, 1300],
        type: 'line',
      },
      {
        name: 'Profit',
        data: [700, 800, 750],
        type: 'line',
      },
    ],
  };

  countsData: {
    numberOfUsers: number;
    numberOfCoaches: number;
    numberOfTransactions: number;
    numberOfPlans: number;
    numberOfWorkoutPlans: number;
    numberOfReservations: number;
  } = {
    numberOfUsers: 0,
    numberOfCoaches: 0,
    numberOfTransactions: 0,
    numberOfPlans: 0,
    numberOfWorkoutPlans: 0,
    numberOfReservations: 0,
  };
  topCoaches: any[] = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.fetchData();
    this.fetchCounts();
    this.fetchTopThreeCoaches();
  }

  fetchData() {
    this.analyticsService.getAnalytics().subscribe({
      next: (response) => {
        const analyticsData = response.data as AnalyticsItem[];
        this.linechart = {
          series: [
            {
              name: 'Total Cost',
              data: analyticsData.map((item: AnalyticsItem) => item.totalCost),
              type: 'line',
            },
            {
              name: 'Total Income',
              data: analyticsData.map(
                (item: AnalyticsItem) => item.totalIncome
              ),
              type: 'line',
            },
            {
              name: 'Profit',
              data: analyticsData.map((item: AnalyticsItem) => item.profit),
              type: 'line',
            },
          ],
          chart: {
            type: 'line',
          },
          title: {
            text: 'Monthly Financial Analytics',
          },
          xAxis: {
            categories: analyticsData.map(
              (item: AnalyticsItem) => `${item.month}/${item.year}`
            ),
          },
          yAxis: {
            title: {
              text: 'Amount ($)',
            },
          },
        };
      },
      error: (error) => {
        console.error('Error fetching analytics data:', error);
      },
    });
  }
  fetchCounts() {
    this.analyticsService.getAnalyticsCounts().subscribe({
      next: (response) => {
        this.countsData = response.data;
        console.log(this.countsData);
      },
      error: (error) => console.error('Error fetching counts:', error),
    });
  }
  fetchTopThreeCoaches() {
    this.analyticsService.getTopThreeCoaches().subscribe({
      next: (response) => {
        this.topCoaches = response.data;
      },
      error: (error) => console.error('Error fetching top coaches:', error),
    });
  }
}
