import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor(private http: HttpClient) { }

  getAllProduct():Observable<any>{
     return this.http.get("https://dummyjson.com/products")
  }
}
