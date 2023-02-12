import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { environment } from "src/environments/environment";

const TOKEN_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public urlLogin: string = environment.baseUrl + "user";

  constructor(
    private nativeStorage: NativeStorage,
    private http: HttpClient
  ) {
  }

  login(no_telefon, password): Observable<any> {
    // return this.http.get(`${this.urlLogin}?no_telefon=${no_telefon}&password=${password}`,{}).pipe(
    var loginURL = environment.baseUrl + "UserLogin";
    return this.http.post(loginURL, { no_telefon, password }).pipe(
      take(1),
      tap((res) => {
        console.log(res);
        if (res != 'false') {
          this.nativeStorage.setItem(TOKEN_KEY, { value: res });
        }

      })
    )
  }

  register(register: any): Observable<any> {
    const registerURL = environment.baseUrl + 'UserRegister';
    return this.http.post<any>(registerURL, register);
  }

  logout(): Promise<void> {
    // let user;

    // this.nativeStorage.getItem('user').then(res => {
    //   user = res;

    // });

    // localStorage.setItem(user.user_id, 'true')
    return this.nativeStorage.remove(TOKEN_KEY);
  }

  forgetpass(phone: any): Observable<any> {
    var forgetpassURL = environment.baseUrl + "ForgotPass";
    return this.http.post<any>(forgetpassURL, { phone });
  }
}
