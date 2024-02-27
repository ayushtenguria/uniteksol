import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <div className="m-10">
        <Nav></Nav>
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}
