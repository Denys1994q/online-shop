import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [SignInComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule]
})
export class SignInModule {}
