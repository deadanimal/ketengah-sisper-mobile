import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddbookingURL = environment.baseUrl + "booking";
    return this.http.post<any>(AddbookingURL, data);
  }

  get():Observable<any> {
    var BookingURL = environment.baseUrl + "booking";
    return this.http.get<any>(BookingURL);
  }

  getuser(id:any):Observable<any> {
    var BookingURL = environment.baseUrl + "booking/" + id;
    return this.http.get<any>(BookingURL);
  }

  getgraf():Observable<any> {
    var BookingURL = environment.baseUrl + "grafbook";
    return this.http.get<any>(BookingURL);
  }
}
