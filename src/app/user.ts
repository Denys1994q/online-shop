export enum PermissionEnum {
  Read = 'read',
  Write = 'write',
  Delete = 'delete'
}

export interface UserInterface {
  permissions: PermissionEnum[];
}
export const user = {
  permissions: [PermissionEnum.Read, PermissionEnum.Write]
};
