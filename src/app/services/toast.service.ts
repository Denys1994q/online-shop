import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private _snackBar: MatSnackBar) {}

  showSuccess(message: string): void {
    this._snackBar.open(message, 'X', {panelClass: 'toast-success'});
  }

  showError(message: string): void {
    this._snackBar.open(message, 'X', {panelClass: 'toast-error'});
  }
}
