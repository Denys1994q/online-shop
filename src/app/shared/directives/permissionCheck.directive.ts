import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export enum PermissionEnum {
  Read = 'read',
  Write = 'write',
  Delete = 'delete'
}

export interface UserInterface {
  permissions: PermissionEnum[];
}

const user = {
  permissions: [PermissionEnum.Read, PermissionEnum.Write]
};

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
