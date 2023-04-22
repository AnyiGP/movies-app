import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Details,
  Home,
  LatestReleases,
  Login,
  Popular,
  Search,
  Signup,
} from "./pages";
import { useMe } from "./hooks";

function App() {
  
  const { loginWithToken } = useMe()
  useEffect(() => {
    //   console.log(me)
      loginWithToken();
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-releases" element={<LatestReleases />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
