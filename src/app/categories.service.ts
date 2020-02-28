import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './category'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  
  private _url: string = "/assets/data/categories.json"

  constructor(private http: HttpClient) { 
  }

  getCategories(): Observable<ICategory[]>   {
    return this.http.get<ICategory[]>(this._url);
  }
}
