import { Routes, Route } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import {
  Home,
  ProducDetail,
  Cart,
  Collection,
  SignIn,
  SignUp,
  Rental,
  CheckOut,
} from "./_rootLayout";
import { NotificationAddCart, AboutUsReal } from "./components";
import React, { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  productsInCartType,
  ClientToServerEvents,
  ServerToClientEvents,
} from "./types";
import "./global.css";
import "./animation.css";
import RootLayout from "./_rootLayout/RootLayout";
import AuthLayout from "./_authLayout/AuthLayout";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";

export const SocketContext = React.createContext<
  Socket<ServerToClientEvents, ClientToServerEvents> | undefined
>(undefined);

const App = () => {
  const { accessToken, user } = useAuthContext();
  const navigate = useNavigate();
  const [socket, setSocket] = useState<
    Socket<ServerToClientEvents, ClientToServerEvents> | undefined
  >(undefined);

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth/signin");
    }
  }, []);

  const nodeRef = useRef(null);
  const [productsInCart, setProductsInCart] = useState<productsInCartType[]>(
    []
  );

  useEffect(() => {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
      "http://localhost:5001",
      {
        reconnectionDelayMax: 10000,
        auth: {
          token: "123",
        },
        query: {
          userId: user.id,
        },
      }
    );

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [accessToken]);

  useEffect(() => {
    socket?.on("newProductInCart", (newProduct: productsInCartType) => {
      setShowNotification(true);
      setProductsInCart((productsInCart) => [...productsInCart, newProduct]);
    });
  }, [socket?.io]);

  const [showNotification, setShowNotification] = useState<boolean>(false);

  if (showNotification) {
    setTimeout(() => setShowNotification(false), 3000);
  }

  return (
    <SocketContext.Provider value={socket}>
      <div className="relative w-full h-screen pt-[70px]">
        <div className="fixed z-20 top-10 right-5 ">
          <TransitionGroup>
            {showNotification && (
              <CSSTransition
                key="notification"
                nodeRef={nodeRef}
                in={showNotification}
                timeout={100}
                classNames="fade"
                unmountOnExit
              >
                <div className="notification cart_notification">
                  <NotificationAddCart
                    newProduct={productsInCart[productsInCart.length - 1]}
                  />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/collection/:collectionName"
              element={<Collection />}
            />

            <Route path="/about-us" element={<AboutUsReal />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/product/:name/:id" element={<ProducDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </div>

      <div className="w-full h-screen flex justify-center items-center">
        <h1>Xin chao</h1>
      </div>
    </SocketContext.Provider>
  );
};

export default App;
