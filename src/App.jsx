import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/routing/ProtectedRoute";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpassword from "./pages/Forgotpassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/profilePage";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import LoginGetStarted from "./pages/LoginGetStarted";
import NameMeaning from "./pages/NameMeaning";
import FamilyTree from "./pages/Family-tree";
import Genealogy from "./pages/Genealogy";
import { SearchTree } from "./pages/SearchTree";
import AboutUs from "./pages/AboutUs";
import NameDetails from "./pages/NAmes";
import GetStartedWithFamilyTree from "./pages/GetStartedWithFamilyTree";
import FamilyTreeFeeds from "./pages/FamilyTree-Pages/FamilyTree-Feeds";
import Layout from "./pages/LAYOUTS/Pages/FamilyTreeSelf";
import NotFound from "./pages/NotFound";

//  all family tree forms
import PersonalForm from "./components/Forms/personalForm";
import MotherForm from "./components/Forms/MothersForm";
import FatherForm from "./components/Forms/FathersForm";
import PaternalGrandmotherForm from "./components/Forms/PaternalGrandmotherForm";
import PaternalGrandfatherForm from "./components/Forms/PaternalGrandfatherForm";
import MaternalGrandmotherForm from "./components/Forms/MaternalGrandmotherForm";
import MaternalGrandfatherForm from "./components/Forms/MaternalGrandfatherForm";

// Other pages in Layout
import Viewers from "./pages/LAYOUTS/Pages/Viewers";
import Invites from "./pages/LAYOUTS/Pages/Invites";
import FindInTree from "./pages/LAYOUTS/Pages/FindInTree";

function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const noNavFooterRoutes = [
      "/login",
      "/register",
      "/forgotpassword",
      "/VerifyOtpPage",
      "/ResetPassword",
    ];
    const protectedRoutes = ["/layout"];

    if (noNavFooterRoutes.includes(location.pathname)) {
      setShowNav(false);
      setShowFooter(false);
    } else if (
      protectedRoutes.some((route) => location.pathname.startsWith(route))
    ) {
      setShowNav(true);
      setShowFooter(false);
    } else {
      setShowNav(true);
      setShowFooter(true);
    }
  }, [location.pathname]);

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/VerifyOtpPage" element={<VerifyOTP />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/LoginGetStarted" element={<LoginGetStarted />} />
        <Route path="/name-meanings" element={<NameMeaning />} />
        <Route path="/my-family-tree" element={<FamilyTree />} />
        <Route path="/search-a-tree" element={<SearchTree />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/about-ayo" element={<AboutAyo />} /> */}
        <Route path="/names/:name" element={<NameDetails />} />
        <Route path="/get-started" element={<GetStartedWithFamilyTree />} />
        <Route path="/FamilyTree-feeds" element={<FamilyTreeFeeds />} />
        <Route path="/" element={<Navigate to="/genealogy/Abia State" />} />
        <Route
          path="/genealogy"
          element={<Navigate to="/genealogy/Abia State" />}
        />
        <Route path="/genealogy/:stateName" element={<Genealogy />} />
        <Route path="*" element={<NotFound />} />

        {/* Layout Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="personal-form" element={<PersonalForm />} />
            <Route path="mothers-form" element={<MotherForm />} />
            <Route path="fathers-form" element={<FatherForm />} />
            <Route
              path="paternalGrandmother-form"
              element={<PaternalGrandmotherForm />}
            />
            <Route
              path="paternalGrandfather-form"
              element={<PaternalGrandfatherForm />}
            />
            <Route
              path="maternalGrandmother-form"
              element={<MaternalGrandmotherForm />}
            />
            <Route
              path="maternalGrandfather-form"
              element={<MaternalGrandfatherForm />}
            />
            <Route path="viewers" element={<Viewers />} />
            <Route path="invites" element={<Invites />} />
            <Route path="find-in-tree" element={<FindInTree />} />
          </Route>
        </Route>
      </Routes>
      {/* {showFooter && <Footer />} */}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
