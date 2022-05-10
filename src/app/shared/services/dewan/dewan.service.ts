import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DewanService {

  constructor(
    private http: HttpClient
  ) { }

  getdd():Observable<any> {
    var LokasiURL = environment.baseUrl + "dewan";
    return this.http.get<any>(LokasiURL);
  }
}
