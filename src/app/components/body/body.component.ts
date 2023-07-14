import { Component } from '@angular/core';
import { Map } from 'leaflet';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  ngAfterViewInit() {
    const map = new Map('map').setView([51.505, -0.09], 13);;
  }


}
