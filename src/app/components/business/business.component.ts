import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/service/business/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: Business [] = [];

  constructor( private businessS: BusinessService){}
  
  ngOnInit(): void {
  }


  cargarnegocios(): void {
    this.businessS.obtenerNegocios().subscribe(data => {
      this.business = data;
    })
  }

}
