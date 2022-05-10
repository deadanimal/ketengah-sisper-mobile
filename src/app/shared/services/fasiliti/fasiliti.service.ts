import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FasilitiService {

  constructor(
    private http: HttpClient
  ) { }

  getfutsal():Observable<any> {
    var AlatanURL = environment.baseUrl + "futsal";
    return this.http.get<any>(AlatanURL);
  }

  getbadminton():Observable<any> {
    var AlatanURL = environment.baseUrl + "badminton";
    return this.http.get<any>(AlatanURL);
  }
}
