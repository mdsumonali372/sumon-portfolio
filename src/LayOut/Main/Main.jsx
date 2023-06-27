import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Home from "../../components/pages/Home/Home/Home";

const Main = () => {
  return (
    <div>
     <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
