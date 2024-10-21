import {
  AboutUs,
  Popular,
  Showroom,
  TryAtHome,
  Announcement,
} from "../components";
import ChatBox from "../components/ChatBox";
import { useState} from "react";

const Home = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    setScrollPosition(scrollTop);
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className="relative w-full flex flex-col 
    items-center  gap-10 mb-[100px]"
    >
      <div className="fixed bottom-3 right-3 z-50">
        {showChatBox ? (
          <ChatBox setShowChatBox={setShowChatBox} />
        ) : (
          <div
            onClick={() => setShowChatBox(!showChatBox)}
            className=" p-[5px] 
      rounded-[50%] hover:cursor-pointer hover:scale-125 bg-[#E6F7FF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c1.4 0 2.73-.3 3.94-.83L21 22l-1.18-4.12c.53-1.24.83-2.57.83-3.88 0-5.52-4.48-10-10-10zm-1.5 13h-3v-2h3v2zm0-3h-3v-2h3v2zm4.5 3h-3v-2h3v2zm0-3h-3v-2h3v2z"
                fill="#00A4CC"
              />
              <path
                d="M12 4c-4.41 0-8 3.59-8 8 0 1.28.29 2.5.82 3.57l-1.1 3.73 3.71-1.07c1.08.54 2.26.88 3.57.88 4.41 0 8-3.59 8-8s-3.59-8-8-8z"
                fill="#ffffff"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="w-full">
        <Announcement />
        <AboutUs />
      </div>

        <Popular />
        {scrollPosition >= 1000 &&  <Showroom /> }
   

        {scrollPosition >= 1700 &&    <TryAtHome /> }
    
    </div>
  );
};

export default Home;
