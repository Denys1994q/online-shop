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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductCardComponent,
    DynamicFormComponent,
    TextInputComponent,
    DynamicFormFieldComponent,
    DynamicErrorComponent,
    SliderComponent
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
    PermissionCheckDirective,
    CountryNumberFormatPipe,
    InternationalDatePipe,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [ProductCardComponent, DynamicFormComponent, MatCheckboxModule, MatSliderModule]
})
export class SharedModule {}
