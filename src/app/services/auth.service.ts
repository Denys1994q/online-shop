import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap, map, catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {baseUrl} from '../../enviroments/enviroment';
import {RoutingConstants} from '../shared/constants/rouring.constant';

export interface UserData {
  name?: string;
  surname?: string;
  middleName?: string;
  sex?: string;
  email?: string;
  phone?: string;
  displayName?: string;
  dateOfBirth?: any;
  wishlist?: any[];
  _id?: string;
}

interface UserResponse extends UserData {
  _id: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = `${baseUrl}/auth/signIn`;
  private signUpUrl = `${baseUrl}/auth/signUp`;
  private getUserUrl = `${baseUrl}/auth/me`;
  private logoutUrl = `${baseUrl}/auth/logout`;

  public userDataSubject = new BehaviorSubject<UserData | null>(null);
  public userData$ = this.userDataSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  signIn(credentials: any): Observable<any> {
    return this.http.post<any>(this.signInUrl, credentials).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        this.userDataSubject.next(response);
        this.router.navigate([`/${RoutingConstants.PRODUCTS}`]);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.userDataSubject.value;
  }

  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.signUpUrl, userData).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.accessToken);
        this.userDataSubject.next(response);
        this.router.navigate([`/${RoutingConstants.PRODUCTS}`]);
      })
    );
  }

  getUser(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = {Authorization: `Bearer ${token}`};
    const options = {headers: headers};
    return this.http.get<any>(this.getUserUrl, options).pipe(
      tap((response) => {
        this.userDataSubject.next(response);
      })
    );
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return new Observable();
    const headers = {Authorization: `Bearer ${token}`};
    const options = {headers: headers};
    return this.http.get<any>(this.logoutUrl, options).pipe(
      tap(() => {
        localStorage.removeItem('authToken');
        this.userDataSubject.next(null);
        this.router.navigate([`/${RoutingConstants.SIGN_IN}`]);
      })
    );
  }
}
