import { Component, OnInit } from '@angular/core';
import { icon, Map, marker, tileLayer, circle as Lcircle } from 'leaflet';
import { PlacesService } from 'src/app/service/place/places.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  geo:any;
  map:any;
    
  constructor(private placeS: PlacesService){}
  
  ngOnInit() {
    
    setTimeout(()=>{
  
      this.geo = this.placeS.useLocation;

    }, 2000);

  }

  ngAfterViewInit() {

    setTimeout(()=>{
      
      this.map = new Map('map').setView(this.geo, 15);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      const circle = Lcircle(this.geo, {
        color: 'gray',
        fillColor: 'gray',
        fillOpacity: 0.1,
        radius: 1400
      }).addTo(this.map);

      marker(this.geo).addTo(this.map).bindPopup("Mi Ubi").openPopup();

    }, 2000); 
  }


}
