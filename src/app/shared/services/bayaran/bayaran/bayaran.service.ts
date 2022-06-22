import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BayaranService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddURL = environment.baseUrl + "bayaran";
    return this.http.post<any>(AddURL, data);
  }

  lejar(data:any): Observable<any> {
    var LejarURL = environment.baseUrl + "lejar";
    return this.http.post<any>(LejarURL, data);
  }

  getuser(id:any,data:any): Observable<any> {
    var getURL = environment.baseUrl + "bayaran/"+id;
    return this.http.put<any>(getURL, data);
  }
}
