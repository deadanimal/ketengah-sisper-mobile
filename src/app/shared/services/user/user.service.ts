import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { 

  }

  update(type, data, id): Observable<any> {
    console.log(id);
    var updateURL = environment.baseUrl + "user/" + id;
    return this.http.patch<any>(updateURL, {type,data});
  }
}
