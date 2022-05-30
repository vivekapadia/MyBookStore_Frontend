import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";

import "./assets/css/style.css";
import { theme } from "./utils/theme";
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <div className="wrapper">
            <main>
              <MainNavigation />
            </main>
          </div>
          <ToastContainer />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>

  );
}

export default App;
