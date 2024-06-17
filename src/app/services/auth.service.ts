import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {enviroment} from '../../enviroments/enviroment';
import {UserInterface} from '../shared/directives/permissionCheck.directive';
import {UserTokens} from '../shared/models/user.interface';
import {WITH_TOAST} from '../interceptors/error.interceptor';
import {WITH_AUTH_TOKEN} from '../interceptors/auth-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = `${enviroment.baseUrl}/auth/signIn`;
  private signUpUrl = `${enviroment.baseUrl}/auth/signUp`;
  private getUserUrl = `${enviroment.baseUrl}/auth/me`;
  private logoutUrl = `${enviroment.baseUrl}/auth/logout`;

  private userDataSubject = new BehaviorSubject<UserInterface | null>(null);
  public userData$ = this.userDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  signIn(credentials: {email: string; password: string}): Observable<UserInterface> {
    const context = new HttpContext();
    context.set(WITH_AUTH_TOKEN, false);

    return this.http.post<UserTokens>(this.signInUrl, credentials, {context}).pipe(
      switchMap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        return this.getUser();
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.userDataSubject.value;
  }

  signUp(userData: UserInterface): Observable<UserInterface> {
    const context = new HttpContext();
    context.set(WITH_AUTH_TOKEN, false);

    return this.http.post<UserTokens>(this.signUpUrl, userData, {context}).pipe(
      switchMap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        return this.getUser();
      })
    );
  }

  getUser(): Observable<UserInterface> {
    if (this.userDataSubject.getValue()) {
      return this.userDataSubject as Observable<UserInterface>;
    } else {
      const context = new HttpContext();
      context.set(WITH_TOAST, false);

      return this.http
        .get<UserInterface>(this.getUserUrl, {context})
        .pipe(tap((response) => this.userDataSubject.next(response)));
    }
  }

  logout(): Observable<void> {
    const token = localStorage.getItem('authToken');
    if (!token) return new Observable();
    const headers = {Authorization: `Bearer ${token}`};
    const options = {headers: headers};

    return this.http.get<void>(this.logoutUrl, options).pipe(
      tap(() => {
        localStorage.removeItem('authToken');
        this.userDataSubject.next(null);
      })
    );
  }
}
