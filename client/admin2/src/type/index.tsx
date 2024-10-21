
export interface messageType{ 
    id: number;
    chatRoomId: number;
    senderId: number;
    type: string;
    content: string;
  }
  
export interface chatRoomType {
    id: number;
    userId: number;
    userName: string;
  }

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;

  newMessage: (message: messageType) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
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

export interface orderDetailType {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface orderType {
  id: number;
  email:string;
  phone: string;
  orderDate: string;
  status: string;
  paymentMethodName: string;
}

export interface productsInOrderType {
  id:number
  productName:string,
  image:string,
  quantity:number,
  status:string,
  priceSale:number,
  priceRent:number,
  startDate:string,
  endDate:string
}

