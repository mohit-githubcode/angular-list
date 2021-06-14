import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
                        // bar chart start

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData: any= [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
                // bar chart end
          

                // line chart start
  lineChartData: any = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];
 
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
 
  lineChartOptions = {
    responsive: true,
  };
 
  lineChartColors: any = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
 
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
                // line chart end

  constructor() { }

  ngOnInit(): void {
  }

}
