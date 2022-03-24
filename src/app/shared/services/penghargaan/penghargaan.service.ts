import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PenghargaanService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddPenghargaanURL = environment.baseUrl + "penghargaan";
    return this.http.post<any>(AddPenghargaanURL, data);
  }
}
