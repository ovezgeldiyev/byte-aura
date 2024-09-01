import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
import Footer from "./Base/Footer";
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
