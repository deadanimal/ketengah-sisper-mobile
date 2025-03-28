import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShtenderdtlService {

  constructor(
    private http: HttpClient
  ) { }

  get(id:any):Observable<any> {
    var tenderURL = environment.baseUrl + "tenderdtl/" + id;
    return this.http.get<any>(tenderURL);
  }

  add(data:any): Observable<any> {
    var tenderURL = environment.baseUrl + "tenderdtl";
    return this.http.post<any>(tenderURL, data);
  }

  update(data:any, id:any): Observable<any> {
    var tenderURL = environment.baseUrl + "tenderdtl/" + id;
    console.log(data);
    return this.http.put<any>(tenderURL, data);
  }

  delete(id:any): Observable<any> {
    var tenderURL = environment.baseUrl + "tenderdtl/" + id;
    return this.http.delete<any>(tenderURL);
  }
}
