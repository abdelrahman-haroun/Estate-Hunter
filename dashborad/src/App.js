import { useContext } from "react";
import NavWithAside from "./pages/aside/NavWithAside";
import Users from "./pages/Users";
import Main from "./pages/Main";
import AdsAccepted from "./pages/AdsAccepted";
import AdsPending from "./pages/AdsPending";
import AdsPaid from "./pages/AdsPaid";
import Login from "./pages/Login";
import ApiContext from "./context/ApiContext";
import { Route, Routes } from "react-router-dom";
// import Profile from "./pages/Profile";

function App() {
  const { adminActive } = useContext(ApiContext);

  return (
    <>
      {Object.keys(adminActive).length > 0 ? (
        <>
          <NavWithAside />
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <Main />
                </div>
              }
            />
            <Route
              path="/users"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <Users />
                </div>
              }
            />
            <Route
              path="/adsAccepted"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <AdsAccepted />
                </div>
              }
            />

            <Route
              path="/adsPending"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <AdsPending />
                </div>
              }
            />

            <Route
              path="/adsPaid"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <AdsPaid />
                </div>
              }
            />
            {/* <Route
              path="/Profile"
              element={
                <div className="p-4 sm:ml-64 mt-14">
                  <Profile />
                </div>
              }
            /> */}
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
