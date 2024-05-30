export interface productType {
  
    titile: string;
    priceSell: string;
    priceRent: string;
    path: string;
    specialDetail:Array<string>
    
}

export interface productStatus{
    status :string,
    quantity:number,
    size:string
}

export interface productsInCart {
    productInfo: productType;
    productMore: productStatus;
}