import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  create(data: Productos): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'producto', params, { headers: headers });
  }

  getall(): Observable<any> {
    return this._http.get(this.url + 'productos');
  }

  contador(): Observable<any> {
    return this._http.get(this.url + 'productoscontador');
  }

  getone(IDPRODUCTO): Observable<any> {
    return this._http.get(this.url + 'producto/' + IDPRODUCTO);
  }

  delete(IDPRODUCTO, PORTADA): Observable<any> {
    return this._http.get(this.url + 'productodelete/' + IDPRODUCTO + '/' + PORTADA);
  }

  update(data: Productos): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'productoupdate', params, { headers: headers });
  }

}
