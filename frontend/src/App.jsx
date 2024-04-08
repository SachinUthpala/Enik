import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import SetUp from "./pages/SetUp";
import AddEnergy from "./pages/AddEnergy";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./components/EditProfile";
import BatteryGraph from "./components/BatteryGraph";
import Layout from "./components/Layout";

// Create a custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#43C6AC", // Change this to your desired primary color
//     },
//   },
// });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/setup" element={<SetUp />} />
            <Route path="/addenergy" element={<AddEnergy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />

            <Route path="*" element={<Navigate to="/Login" />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/" element={<Layout />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgotpassword" element={<ForgotPassword />} />
    <Route path="/setup" element={<SetUp/>} />
    <Route path="/addenergy" element={<AddEnergy/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/editprofile" element={<EditProfile/>} />
    <Route path="/batterygraph" element={<BatteryGraph/>} /> */
}
