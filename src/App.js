import { Routes, Route } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SuccessMessage from "./messages/SuccessMessage";
import Rooms from "./components/Rooms";
import Logout from "./components/Logout";
import Contact from "./components/Contact";

const initialAuthState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
};

function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = (data) => {
    setUser(data);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <Navbar />

        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register/successfully" element={<SuccessMessage />} />
            {user.token ? <Route path="/rooms" element={<Rooms />} /> : ""}
            {user.token ? <Route path="/messages" element={<Contact />} /> : ""}

          </Routes>

        </main>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
