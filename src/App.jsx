import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbarr from "./components/Navbar/Navbarr.jsx";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.jsx";
import RightSideBar from "./components/RightSideBar/RightSideBar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import CommunitiesPage from "./pages/CommunitiesPage/CommunitiesPage.jsx";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage.jsx";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";

function AppContent() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbarr />}
      {!isAuthPage && <LeftSidebar />}
      {!isAuthPage && <RightSideBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
