// src/App.jsx
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? <LoadingScreen /> : <Home />}
    </ThemeProvider>
  );
}

export default App;