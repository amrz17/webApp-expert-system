import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";

const MainLayoutUser = ({ children }) => {
  return (
    <main>
      <NavbarUser />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayoutUser;
