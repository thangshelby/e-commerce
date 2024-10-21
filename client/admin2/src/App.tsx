import { Routes, Route } from "react-router-dom";
import {
  RootLayout,
  Dashboard,
  Team,
  CreateUser,
  CreateProduct,
  ViewProduct,
  ManageOrder,
  OrderDetailPage
} from "./_root/index.ts";
import ChatFeed from "./_root/chatfeed/ChatFeed.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.js";
import { SignIn, SignUp, AuthLayout } from "./_auth/index.ts";
import { io, Socket } from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { ServerToClientEvents, ClientToServerEvents } from "./type/index.tsx";

export const SocketContext = createContext<
  Socket<ServerToClientEvents, ClientToServerEvents> | undefined
>(undefined);

function App() {
  const [theme, colorMode] = useMode();
  const [socket, setSocket] = useState<
    Socket<ServerToClientEvents, ClientToServerEvents> | undefined
  >(undefined);

  useEffect(() => {
    const socket = io("http://localhost:5001", {
      reconnectionDelayMax: 10000,
      auth: {
        token: "123",
      },
      query: {
        userId: 1,
      },
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <ColorModeContext.Provider
        value={{ ...colorMode, toggleColorMode: () => {} }}
      >
        <ThemeProvider theme={theme as any}>
          <CssBaseline />

          <div className="w-full h-screen">
            <Routes>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
              </Route>

              <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<CreateUser />} />
                <Route path="/list-user" element={<Team />} />
                <Route
                  path="/manage-user-detail/:userId"
                  element={<CreateUser />}
                />
                <Route path="/order-detail/:orderId" element={<OrderDetailPage />} />
                <Route path="/add-product" element={<CreateProduct />} />
                <Route path="/list-product" element={<ViewProduct />} />
                <Route
                  path="/manage-product-detail/:productId"
                  element={<CreateProduct />}
                />
                <Route path="/list-order" element={<ManageOrder/>}/>

                <Route path="/message" element={<ChatFeed />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SocketContext.Provider>
  );
}

export default App;
