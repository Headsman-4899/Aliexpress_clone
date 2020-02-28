import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs';
import * as angular from "angular";

@Injectable()
export class ProductService {
  
  private _url: string = "/assets/data/product.json"
  constructor(private http: HttpClient) { 
  }

  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

  getProductsByCategory(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }
}
