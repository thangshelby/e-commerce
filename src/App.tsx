import { Routes, Route } from "react-router-dom";
import { Home, ProducDetail, Cart, Collection, SignIn } from "./pages";
import { Navbar, Footer, NotificationAddCart } from "./components";
import { useSelector } from "react-redux";
import { useProductSelector } from "./store/selector";
import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { productsInCart } from "./types";

import "./global.css";
import "./animation.css";

const App = () => {
  const productsInCart: [productsInCart] = useSelector(useProductSelector);
  const nodeRef = useRef(null);
  const [isAuthen, setIsAuthen] = useState(false);
  useEffect(() => {
    if (productsInCart.length > 0) {
      setShowNotification(true);
    }
  }, [productsInCart]);

  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="relative w-full h-screen pt-[70px]">




      {showNotification
        ? setTimeout(() => setShowNotification(false), 3000)
        : null}
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



      <Navbar setIsAuthen={setIsAuthen} />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='auth/signin' element={<SignIn/>}/>
      
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:name" element={<ProducDetail />}></Route>
        <Route path="/collection/:collectionName" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
