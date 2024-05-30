import {
  AboutUs,
  Popular,
  Showroom,
  TryAtHome,
  Announcement,
} from "../components";



const Home = () => {

  return (
    <div
      className="relative w-full flex flex-col 
    items-center  gap-10 mb-[100px]"
    >
      <div className="w-full">
      <Announcement />
      <AboutUs />
      </div>
   

      <Popular />

      <Showroom />
      <TryAtHome />
    </div>
  );
};

export default Home;
