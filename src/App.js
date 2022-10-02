import "./App.css";
import LandingPage from "./container/LandingPage/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from "./container/HomePage/HomePage";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="app">
      {isAuthenticated ? <HomePage /> : <LandingPage />}
    </div>
  );
}

export default App;
