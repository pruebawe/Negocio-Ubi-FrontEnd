import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/service/business/business.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  direccion: string = '';
  latitud: number = 0;
  longitud: number = 0;
  horaInicio: number = 0;
  horaFin: number = 0;

  constructor(private router: Router , private businessS: BusinessService) {}

  ngOnInit():void {
  }

  agregarNegocio():void {

    const business = new Business(this.nombre, this.descripcion, this.direccion, this.latitud, this.longitud, this.horaInicio, this.horaFin);

    this.businessS.agregarNegocio(business).subscribe(
      data => {
        alert("Negicio añadido correctamente");
        this.router.navigate(['']);
      },
      error => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}

