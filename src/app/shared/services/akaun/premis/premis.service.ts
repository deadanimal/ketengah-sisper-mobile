import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PremisService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddURL = environment.baseUrl + "premis";
    return this.http.post<any>(AddURL, data);
  }
}
