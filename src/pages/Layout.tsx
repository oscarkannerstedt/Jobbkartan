import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchHeader } from "../components/SearchHeader";

const Layout = () => {
  return (
    <>
      <Header />
      <SearchHeader />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
