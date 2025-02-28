import "./App.css";
import Car from "./ClassComponent";
import Bike from "./ClassComponent2";
import ProductList from "./ClassComponentEcommerce";
import FootBall from "./EventHandling";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
// import Contact from "./Contact";
// import About from "./About";
// import Home from "./Home";
// import MyComponent2 from "./Components/MyComponent2";
// import wiproLogo from "./wipro_new_logo.svg";
// import Registration from "./Registration";
import FunctionalComponent from "./FunctionalComponent";
import ProductItem from "./ProductItem";

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "30px",
//     padding: "15px",
//     background: "#00f",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     zIndex: 1000,
//   },

//   link: {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     padding: "10px",
//   },

//   pageContainer: {
//     marginTop: "70px",
//     padding: "20px",
//   },
// };

function App() {
  return (
    <>
      {/* <Router>
        <nav style={styles.navbar}>
          <img src={wiproLogo} alt="logo" style={{ height: "40px" }} />

          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
          <Link to="/category" style={styles.link}>
            Categories
          </Link>
          <Link to="/registration" style={styles.link}>
            Register
          </Link>
        </nav>

        <div style={styles.pageContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<MyComponent2 />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </Router> */}

      <FunctionalComponent />
      <Car />
      <Bike />
      {/* <ProductItem /> */}
      <FootBall />
    </>
  );
}
export default App;
