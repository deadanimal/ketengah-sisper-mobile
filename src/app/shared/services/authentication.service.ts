import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public urlLogin: string = environment.baseUrl + "user";

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(
    private router: Router,
    private nativeStorage: NativeStorage,
    private http: HttpClient
  ) { 
  }
 
  login(no_telefon, password): Observable<any> {
    // return this.http.get(`${this.urlLogin}?no_telefon=${no_telefon}&password=${password}`,{}).pipe(
    var loginURL = environment.baseUrl + "UserLogin";
    return this.http.post(loginURL,{no_telefon,password}).pipe(
      take(1),
      tap((res) => {
        this.nativeStorage.setItem(TOKEN_KEY, {value: res[0]});
      })
    )
  }
 
  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return this.nativeStorage.remove(TOKEN_KEY);
  }


}
