import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AduanService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddaduanURL = environment.baseUrl + "aduan";
    return this.http.post<any>(AddaduanURL, data);
  }

  first(data:any): Observable<any> {
    // console.log('data', data)
    var aduanURL = environment.baseUrl + "AduanFirst";
    return this.http.post<any>(aduanURL, data);
  }

  getdd():Observable<any> {
    var aduanDDURL = environment.baseUrl + "AduanDD";
    return this.http.get<any>(aduanDDURL);
  }

  getbyid(userid): Observable<any> {
    var aduanuserURL = environment.baseUrl + "aduan/" + userid;
    return this.http.get<any>(aduanuserURL);
  }
}
