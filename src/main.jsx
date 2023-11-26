import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useLayoutEffect } from "react";
import "./assets/css/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Uber, Plan, Pricing } from "./views";
import Dienstleistungen from "./views/Dienstleistungen";
import Contact from "./views/Contact";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path={"/*"} element={<Home />}></Route>
          <Route path={"/uber"} element={<Uber />}></Route>cl
          <Route path={"/projektierung"} element={<Plan />}></Route>
          <Route
            path={"/dienstleistungen"}
            element={<Dienstleistungen />}
          ></Route>
          <Route path={"/preise"} element={<Pricing />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

export default Main;
