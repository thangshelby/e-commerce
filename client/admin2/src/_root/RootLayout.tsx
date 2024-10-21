
import Navbar from "./global/Sidebar";
import Topbar from "./global/Topbar";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
// import ChatIcon from "@mui/icons-material/Chat";

const RootLayout = () => {
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app h-screen">
      <Navbar />
      <main className="content h-full overflow-y-scroll">
        <Topbar  />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
