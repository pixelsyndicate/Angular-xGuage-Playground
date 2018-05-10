import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-xgauge',
  templateUrl: './xgauge.component.html',
  styleUrls: ['./xgauge.component.css']
})
export class XgaugeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

options = {
      type: "semi",
      cap: 'round',
      size: 300,
      value: 28.3,
      thick: 20,
      label: "Speed",
      append: "km/hr",
      min: 0,
      max: 100,
    foregroundColor: '#009688',//'rgba(0, 150, 136, 1)',
    backgroundColor: '#ebebeb',//'rgba(0, 0, 0, 0.1)'
    };
    
    thresholdConfig = {
        '0': {color: 'green'},
        '40': {color: 'orange'},
        '75.5': {color: 'red'}
    };
}
