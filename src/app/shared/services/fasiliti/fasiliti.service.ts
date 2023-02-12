import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FasilitiService {
  rates: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  getfutsal(): Observable<any> {
    var AlatanURL = environment.baseUrl + "futsal";
    return this.http.get<any>(AlatanURL);
  }

  getbadminton(): Observable<any> {
    var AlatanURL = environment.baseUrl + "badminton";
    return this.http.get<any>(AlatanURL);
  }

  getFasilities() {

    const url = environment.baseUrl + "fasiliti";
    return this.http.get(url);

  }
}
