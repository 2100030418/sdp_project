import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Signup";
import Setting from "./pages/Setting";
import Login from "./pages/Login"
import Scrollbar from './components/Scrollbar'

function App() {
  return (
    <Router>
      <Scrollbar></Scrollbar>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/SignUp" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/A" element={<Saved />} />
          <Route path="/Login" element={< Login/>} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;