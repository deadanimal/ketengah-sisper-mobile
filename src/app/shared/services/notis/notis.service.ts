import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotisService {

  constructor(
    private http: HttpClient
  ) { }

  getbyid(userid): Observable<any> {
    var notisuserURL = environment.baseUrl + "notis/" + userid;
    return this.http.get<any>(notisuserURL);
  }

  viewid(notisid,userid): Observable<any> {
    var notisviewedURL = environment.baseUrl + "notisview";
    return this.http.post<any>(notisviewedURL, [notisid,userid]);
  }

  softdelete( notisid,userid ): Observable<any>{
    var notisdeleteURL = environment.baseUrl + "softdelete";
    return this.http.post<any>(notisdeleteURL, [notisid,userid]);
  }

  add(data:any): Observable<any> {
    var AddnotisURL = environment.baseUrl + "notis";
    return this.http.post<any>(AddnotisURL, data);
  }

  getnotis(data:any): Observable<any> {
    var notisURL = environment.baseUrl + "notisapi";
    return this.http.post<any>(notisURL, data);
  }
}
