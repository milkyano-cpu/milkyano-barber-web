import React from "react";
import "@/App.scss";
import AppRoutes from "@/routes";
import { ThemeProvider } from "@/ThemeProvider";
import "@fontsource-variable/inter";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme-light">
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
