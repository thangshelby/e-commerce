export interface userType {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  birth: string;
  gender: string;
}

export const userInit = {
  id: 0,
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  birth: "",
  gender: "",
};

export interface productAddCartType {
  status: string;
  quantity: number;
  size: string;
  startRentDate?: string;
  endRentDate?: string;
}
export interface productType {
  id: number;
  name: string;
  category: string;
  description: string;
  priceSale: number;
  priceRent: number;
  stock: number;
  image: string;
  imageDetail: string[];
}

export interface productsInCartType {
  id: number;
  productId: number;
  name: string;
  priceSale: number;
  priceRent: number;
  quantity: number;
  image: string;
  size: string;
  status: string;
  startDate: String;
  endDate: String;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  newProductInCart: (product: productsInCartType) => void;
  deleteProductInCart: (productInCartId: number) => void;
  newMessage: (message: messageType) => void; 
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface categoryType {
  ID: number;
  NAME: string;
  PARENT_CATEGORY_ID: number | null;
}

export interface messageType{ 
  id: number;
  chatRoomId: number;
  senderId: number;
  type: string;
  content: string;
}

export interface deliveryInfoType{
  name: string;
  phone: string;
  email: string;
  addressDetail: string;
  city:{id:number,name:string};
  district: {id:number,name:string};
  ward:{id:number,name:string};
  note: string;
}
