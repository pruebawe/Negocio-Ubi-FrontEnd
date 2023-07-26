import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from 'src/app/models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private apiUrl = 'http://localhost:8080/';

  constructor( private http:HttpClient) { }

  
  public agregarNegocio(business: Business): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'create', business);
  }

  public obtenerNegocios(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiUrl + 'lista');
  }

}
