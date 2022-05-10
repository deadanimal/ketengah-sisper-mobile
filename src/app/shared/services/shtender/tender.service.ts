import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  constructor(
    private http: HttpClient
  ) { }

  add(data:any): Observable<any> {
    var AddtenderURL = environment.baseUrl + "tender";
    return this.http.post<any>(AddtenderURL, data);
  }

  adddtl(data:any,id:any): Observable<any> {
    var AddtenderURL = environment.baseUrl + "tender/" + id;
    return this.http.post<any>(AddtenderURL, data);
  }
}
