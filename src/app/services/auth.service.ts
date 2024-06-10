import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {baseUrl} from '../../enviroments/enviroment';
import {RoutingConstants} from '../shared/constants/rouring.constant';
import {UserInterface} from '../shared/directives/permissionCheck.directive';
import {UserTokens} from '../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = `${baseUrl}/auth/signIn`;
  private signUpUrl = `${baseUrl}/auth/signUp`;
  private getUserUrl = `${baseUrl}/auth/me`;
  private logoutUrl = `${baseUrl}/auth/logout`;

  public userDataSubject = new BehaviorSubject<UserInterface | null>(null);
  public userData$ = this.userDataSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  signIn(credentials: {email: string; password: string}): Observable<UserInterface> {
    return this.http.post<UserTokens>(this.signInUrl, credentials).pipe(
      switchMap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        return this.getUser();
      }),
      tap(() => this.router.navigate([`/${RoutingConstants.PRODUCTS}`]))
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
      }),
      tap(() => this.router.navigate([`/${RoutingConstants.PRODUCTS}`]))
    );
  }

  getUser(): Observable<UserInterface> {
    const token = localStorage.getItem('authToken');
    const headers = {Authorization: `Bearer ${token}`};
    const options = {headers: headers};

    return this.http
      .get<UserInterface>(this.getUserUrl, options)
      .pipe(tap((response) => this.userDataSubject.next(response)));
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return new Observable();
    const headers = {Authorization: `Bearer ${token}`};
    const options = {headers: headers};

    return this.http.get<any>(this.logoutUrl, options).pipe(
      tap((d) => {
        console.log(d)
        localStorage.removeItem('authToken');
        this.userDataSubject.next(null);
        this.router.navigate([`/${RoutingConstants.SIGN_IN}`]);
      })
    );
  }
}
