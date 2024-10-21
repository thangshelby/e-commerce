import SSMSModel from "../database/model/MyModel.js";
import { getSocketIdFromUserId, io } from "../socket/index.js";


export const getAllOrders = async (req, res) => {
    try {
        const orderModel = new SSMSModel();
        const orders = await orderModel.Read("SHOP_ORDER", 
            "SHOP_ORDER.ID AS id,SITE_USER.EMAIL AS email,SITE_USER.PHONE_NUMBER AS phone,SHOP_ORDER.ORDERS_DATE as orderDate,PAYMENT_METHOD.NAME as paymentMethodName,SHOP_ORDER.ORDERS_STATUS AS statussp",
            "JOIN SITE_USER ON SHOP_ORDER.USER_ID = SITE_USER.ID JOIN ADDRESS ON SHOP_ORDER.SHIPPING_ADDRESS_ID = ADDRESS.ID JOIN PAYMENT_METHOD ON SHOP_ORDER.PAYMENT_METHOD = PAYMENT_METHOD.ID" 
        );

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getOrderDetail= async(req,res)=>{
    try {
        const {id} = req.params;
        const orderModel = new SSMSModel();
        const orderDetail = await orderModel.Read("ORDER_LINE", 
            "PRODUCT.ID AS id, PRODUCT.NAME AS productName,ORDER_LINE.QUANTITY AS quantity,ORDER_LINE.STATUS AS status,ORDER_LINE.START_DATE AS startDate,ORDER_LINE.END_DATE AS endDate, PRODUCT.PRICE_SALE AS priceSale,PRODUCT.PRICE_RENT AS priceRent,PRODUCT.IMAGE AS image",
            `JOIN PRODUCT ON ORDER_LINE.PRODUCT_ID = PRODUCT.ID WHERE ORDER_LINE.SHOP_ORDER_ID = ${id}`
        );

        return res.status(200).json(orderDetail);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createOrderLine = async (req, res, next) => {
    try {
        const { orderId,productsInCart} = req.body;

        const orderLineModel = new SSMSModel();

        for (let i = 0; i < productsInCart.length; i++) {
            const {productId,quantity,status,startDate,endDate} = productsInCart[i];
            await orderLineModel.Create(
                "ORDER_LINE",
                `${orderId},${productId},${quantity},N'${status}','${startDate}','${endDate}'`
            );
        }
    return res.status(200).json({ message: "Order created successfully" });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createOrder = async (req, res,next) => {
  try {
    const { user,  paymentMethodId,shippingAddressId, totalPrice } = req.body;
    const orderModel = new SSMSModel();

    console.log(user.id, totalPrice, shippingAddressId, new Date().toISOString().slice(0,10), "N'PENDING'", paymentMethodId);

    const newOrder = await orderModel.Create(
      "SHOP_ORDER",
      `${user.id},${totalPrice},${shippingAddressId},'${new Date().toISOString().slice(0,10)}',N'PENDING',${paymentMethodId}`
    );  
    req.body.orderId = newOrder.ID;
    next();
  } catch (error) {}
};

export const createPaymentMethod = async (req, res, next) => {
  try {
    const { paymentMethod } = req.body;
    const {title}= paymentMethod
    const paymentModel = new SSMSModel();

    const checkPaymentMethod = await paymentModel.Read(
      "PAYMENT_METHOD",
      "*",
      `WHERE NAME='${title}'`
    );

    if (checkPaymentMethod.length === 0) {
      const newPaymentMethod = await paymentModel.Create(
        "PAYMENT_METHOD",
        `N'${title}'`
      );

      req.body.paymentMethodId = newPaymentMethod.ID;
    }
    else{
        req.body.paymentMethodId = checkPaymentMethod[0].ID;
    }

    next();

    
  } catch (error) {}
};

export const createShippingAddress = async (req, res, next) => {
  try {
    const { city, district, ward, addressDetail } = req.body.deliveryInfo;

    const shippingModel = new SSMSModel();

    const shippingAddress = await shippingModel.Create(
      "ADDRESS",
      `N'${city.name.toUpperCase()}',N'${district.name.toUpperCase()}',N'${ward.name.toUpperCase()}',N'${addressDetail}'`
    );

    req.body.shippingAddressId = shippingAddress.ID;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
