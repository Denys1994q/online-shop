interface WishlistInterface {
  product: string;
  addedDate: Date;
  _id: string;
}

export interface UserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  wishlist: WishlistInterface[];
  refreshToken?: string;
}

export interface UserTokens {
  accessToken: string;
  refreshToken: string;
}
