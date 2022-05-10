import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LokasiService {

  constructor(
    private http: HttpClient
  ) { }

  getdd():Observable<any> {
    var LokasiURL = environment.baseUrl + "lokasi";
    return this.http.get<any>(LokasiURL);
  }
}
