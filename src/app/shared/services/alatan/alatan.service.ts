import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlatanService {

  constructor(
    private http: HttpClient
  ) { }

  getdd():Observable<any> {
    var AlatanURL = environment.baseUrl + "alatan";
    return this.http.get<any>(AlatanURL);
  }
}
