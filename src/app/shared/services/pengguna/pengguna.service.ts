import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PenggunaService {

  constructor(
    private http: HttpClient
  ) { }

  search(data:any): Observable<any> {
    var searchpengguna = environment.baseUrl + "searchpengguna";
    return this.http.post<any>(searchpengguna, data);
  }

  aktif(data:any): Observable<any> {
    var searchpengguna = environment.baseUrl + "aktifpengguna";
    return this.http.post<any>(searchpengguna, data);
  }
}
