import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";

import "./assets/css/style.css";
import { theme } from "./utils/theme";
import MainNavigation from "./components/MainNavigation";

import Header from "./components/header";
import Footer from "./components/footer";

import { AuthWrapper } from "./context/auth";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<React.Suspense fallback={<></>}>
				<BrowserRouter>
					<AuthWrapper>
						<div className="wrapper">
							<Header />
							<main>
								<MainNavigation />
							</main>
							<Footer />
						</div>
					</AuthWrapper>
					<ToastContainer />
				</BrowserRouter>
			</React.Suspense>
		</ThemeProvider>
	);
}

export default App;
