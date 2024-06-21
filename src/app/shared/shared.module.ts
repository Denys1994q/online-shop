import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {PrimaryButtonComponent} from './components/buttons/primary-button/primary-button.component';
import {WishlistButtonComponent} from './components/buttons/wishlist-button/wishlist-button.component';
import {DynamicFormComponent} from './components/forms/dynamic-form/dynamic-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DynamicFormFieldComponent} from './components/forms/dynamic-form-field/dynamic-form-field';
import {ScaleDirective} from './directives/scale.directive';
import {PermissionCheckDirective} from './directives/permissionCheck.directive';
import {CountryNumberFormatPipe} from './pipes/countryNumberFormat.pipe';
import {InternationalDatePipe} from './pipes/internationalDate.pipe';
import {TextInputComponent} from './components/inputs/text-input/text-input.component';
import {DynamicErrorComponent} from './components/forms/dynamic-error/dynamic-error.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {SliderComponent} from './components/inputs/slider/slider.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ControlErrorHandlerPipe} from './pipes/control-error-handler.pipe';
import {TogglePasswordDirective} from './directives/toggle-password.directive';
import {MiniProductCardComponent} from './components/mini-product-card/mini-product-card.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductCardComponent,
    MiniProductCardComponent,
    DynamicFormComponent,
    TextInputComponent,
    DynamicFormFieldComponent,
    DynamicErrorComponent,
    SliderComponent,
    SpinnerComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    PrimaryButtonComponent,
    WishlistButtonComponent,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSliderModule,
    ScaleDirective,
    CountryNumberFormatPipe,
    InternationalDatePipe,
    PermissionCheckDirective,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule,
    HttpClientModule,
    MatProgressBarModule,
    ControlErrorHandlerPipe,
    TogglePasswordDirective,
    FormsModule
  ],
  exports: [
    ProductCardComponent,
    DynamicFormComponent,
    MatCheckboxModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatIconModule,
    WishlistButtonComponent,
    PrimaryButtonComponent,
    SpinnerComponent,
    MatProgressBarModule,
    MiniProductCardComponent
  ]
})
export class SharedModule {}
