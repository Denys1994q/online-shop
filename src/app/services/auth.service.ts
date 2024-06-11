import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {enviroment} from '../../enviroments/enviroment';
import {UserInterface} from '../shared/directives/permissionCheck.directive';
import {UserTokens} from '../shared/models/user.interface';

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
    return this.http.post<UserTokens>(this.signInUrl, credentials).pipe(
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
    return this.http.post<UserTokens>(this.signUpUrl, userData).pipe(
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
      const token = localStorage.getItem('authToken');
      const headers = {Authorization: `Bearer ${token}`};
      const options = {headers: headers};

      return this.http
        .get<UserInterface>(this.getUserUrl, options)
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
