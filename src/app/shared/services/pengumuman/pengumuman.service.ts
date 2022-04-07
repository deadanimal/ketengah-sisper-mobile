import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PengumumanService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddumumURL = environment.baseUrl + "pengumuman";
    return this.http.post<any>(AddumumURL, data);
  }

  gettempoh(): Observable<any> {
    var penghargaanURL = environment.baseUrl + "pengumumantempoh";
    return this.http.get<any>(penghargaanURL);
  }
}
