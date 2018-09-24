import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';

  options = [
    { label: 'Amaravathi', value: 'AMR' },
    { label: 'Bangalore', value: 'BLR' },
    { label: 'Hyderabad', value: 'HYD' },
    { label: 'Chennai', value: 'CHN' },
    { label: 'Trivendram', value: 'TRI' },
    { label: 'Mumbai', value: 'MUM' },
    { label: 'Panaji', value: 'PAN' },
    { label: 'Dispur', value: 'DIS' },
    { label: 'Rajasthan', value: 'RAJ' },
    { label: 'Bhopal', value: 'BHO' }
  ];

  onModelChange(value) {
    console.log(value);
  }
}
