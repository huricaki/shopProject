import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { from, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId: any): Observable<Product[]> {
    //alert(categoryId);
    let newpath = this.path;
    if (categoryId) {
      newpath += "?categoryId=" + categoryId;
    }
    return this.http
      .get<Product[]>(newpath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
       'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'bir hata oluştu' + err.error.message;
    }
    else {
      errorMessage = 'sistemsel hata'
    }
    return throwError(errorMessage);
  }
}

