import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import TestPage from "./TestPage";
import Profile from "./pages/Profile/Profile";
import Payment from "./pages/Payment/Payment";
import WishList from "./pages/WishList/WishList";

function App() {
  let alreadyLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={alreadyLoggedIn ? <Home /> : <SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/home" element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/testing" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export const ProtectedRoute = ({ children }) => {
  let alreadyLoggedIn = localStorage.getItem("isLoggedIn");
  if (alreadyLoggedIn) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default App;
