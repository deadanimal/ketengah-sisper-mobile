import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LainService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddlainURL = environment.baseUrl + "lain";
    return this.http.post<any>(AddlainURL, data);
  }

  getdd():Observable<any> {
    var UrusanURL = environment.baseUrl + "laindd";
    return this.http.get<any>(UrusanURL);
  }
}
