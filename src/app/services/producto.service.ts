import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pymesbackend.azurewebsites.net/api/productos/';
  }

  get() {
    let params = new HttpParams();

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  post(obj: Producto) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
  put(ProductoID: number, obj: Producto) {
    return this.httpClient.put(this.resourceUrl + ProductoID, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}
