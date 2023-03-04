import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PerumahanService {

  constructor(
    private http: HttpClient

  ) { }

  add(data: any): Observable<any> {
    var AddURL = environment.baseUrl + "perumahan";
    return this.http.post<any>(AddURL, data);
  }

  deleteAkaun(id: any): Observable<any> {
    var DeleteURL = environment.baseUrl + "perumahan/" + id;
    return this.http.delete<any>(DeleteURL);
  }

  kemaskini(id: string, data: FormData) {
    return this.http.put(environment.baseUrl + "perumahan/" + id, data)
  }
}
