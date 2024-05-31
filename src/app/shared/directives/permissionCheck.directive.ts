import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {user, PermissionEnum} from '../../user';

@Directive({
  selector: '[appPermissionCheck]',
  standalone: true
})
export class PermissionCheckDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appPermissionCheck(permission: PermissionEnum) {
    if (user.permissions.includes(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
